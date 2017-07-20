package ro.teamnet.zth;

import ro.teamnet.zth.api.annotations.MyController;
import ro.teamnet.zth.api.annotations.MyRequestMethod;
import ro.teamnet.zth.appl.controller.DepartmentController;
import ro.teamnet.zth.appl.controller.EmployeeController;
import ro.teamnet.zth.fmk.AnnotationScanUtils;
import ro.teamnet.zth.fmk.MethodAttributes;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class MyDispatcherServlet extends HttpServlet {
    HashMap<String, MethodAttributes> allowedMethods;

    @Override
    public void init() throws ServletException {

        allowedMethods = new HashMap<>();

        try {
            AnnotationScanUtils classes = null;
            Iterable<Class> allClasses = classes.getClasses("ro.teamnet.zth.appl.controller");
            String myPath = "";
            Method [] methods;
            MethodAttributes attributes;
            MyRequestMethod met;
            String key;

            for(Class c:allClasses){
                if(c.isAnnotationPresent(MyController.class))
                    return;

                myPath += ((MyController)c.getAnnotation(MyController.class)).urlPath();

                methods = c.getDeclaredMethods();
                for(Method m:methods){
                    if(m.isAnnotationPresent(MyRequestMethod.class)){
                        met = m.getAnnotation(MyRequestMethod.class);
                        attributes = new MethodAttributes();
                        attributes.setMethodName(m.getName());
                        attributes.setControllerClass(c.getName());
                        attributes.setMethodType(met.methodType());

                        key = myPath + met.urlPath() + "/" + met.methodType();

                        allowedMethods.put(key,attributes);
                    }
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

        @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        dispatchReply(req,resp,"GET");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        dispatchReply(req,resp,"POST");
    }

    private void dispatchReply(HttpServletRequest request, HttpServletResponse response, String methodType) throws IOException {
        try {
            Object resultToDisplay = dispatch(request, methodType);
            reply(response, resultToDisplay);
        } catch (Exception e) {
            sendExceptionError(e, response);
        }
    }

    private Object dispatch(HttpServletRequest request, String requestType) {
        String pathInfo = request.getPathInfo();
        MethodAttributes attributes = null;
        String path;

        if (!pathInfo.startsWith("/employees") && !pathInfo.startsWith("/departments") &&
                !pathInfo.startsWith("/jobs") && !pathInfo.startsWith("/locations") )
            throw new RuntimeException("URL-ul nu contine \"/employees\" sau \"/departments\" sau " +
                    "\"/jobs\" sau \"/locations\"");

        path = pathInfo + "/" + requestType;
        attributes = allowedMethods.get(path);

        if (attributes != null) {
            try {
                Class entityClass = Class.forName(attributes.getControllerClass());
                Method returnMethod = entityClass.getMethod(attributes.getMethodName());
                return returnMethod.invoke(entityClass.newInstance());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return null;
    }

    private void reply(HttpServletResponse response, Object result) throws IOException {
        response.getWriter().write(String.valueOf(result));

    }

    private void sendExceptionError(Exception e, HttpServletResponse response) throws IOException {
        response.getWriter().write(e.getMessage());
    }

}
