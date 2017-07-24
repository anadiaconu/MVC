package ro.teamnet.zth;

import org.codehaus.jackson.map.ObjectMapper;
import ro.teamnet.zth.fmk.MethodAttributes;
import ro.teamnet.zth.fmk.domain.HttpMethod;
import ro.teamnet.zth.utils.BeanDeserializator;
import ro.teamnet.zth.utils.ControllerScanner;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.Method;

public class Z2HDispatcherServlet extends HttpServlet {

    private ControllerScanner cs;

    @Override
    public void init() throws ServletException {
        cs = new ControllerScanner("ro.teamnet.zth.appl.controller");
        cs.scan();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        dispatchReply(req, resp, HttpMethod.GET);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        dispatchReply(req, resp, HttpMethod.POST);
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        dispatchReply(req, resp, HttpMethod.DELETE);
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        dispatchReply(req, resp, HttpMethod.PUT);
    }

    private void dispatchReply(HttpServletRequest req, HttpServletResponse resp, HttpMethod methodType) {
        try {
            Object resultToDisplay = dispatch(req, methodType);
            reply(resp, resultToDisplay);
        } catch (Exception e) {
            try {
                sendExceptionError(e, resp);
            } catch (IOException ioe) {
                ioe.printStackTrace();
            }
        }
    }

    private void sendExceptionError(Exception e, HttpServletResponse resp) throws IOException {
        resp.getWriter().print(e.getMessage());
    }

    private void reply(HttpServletResponse resp, Object resultToDisplay) throws IOException {
        //todo serialize the output(resultToDisplay = controllerinstance.invoke(parameters) ) into JSON using ObjectMapper (jackson)
        ObjectMapper om = new ObjectMapper();
        final String jsonString = om.writeValueAsString(resultToDisplay);
        resp.getWriter().print(jsonString);
    }

    private Object dispatch(HttpServletRequest req, HttpMethod methodType) {
        //todo to invoke the controller method for the current request and return the controller output

        String pathInfo = req.getPathInfo();
        MethodAttributes attributes = cs.getMetaData(pathInfo,methodType);
        if (!pathInfo.startsWith("/employees") && !pathInfo.startsWith("/departments") &&
                !pathInfo.startsWith("/jobs") && !pathInfo.startsWith("/locations") )
            throw new RuntimeException("Wrong URL!!");
        if (attributes != null) {
            try {
                Object controllerClass = attributes.getControllerClass().newInstance();
                Method returnMethod = attributes.getMethod();
                return returnMethod.invoke(controllerClass, BeanDeserializator.getMethodParams(returnMethod,req).toArray());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return null;
    }


}
