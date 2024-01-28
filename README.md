reamining-
1-   In ProtectedRoute 
const location= useLocation();
         <ProtectedRoute state={location.pathname}><Admin/></ProtectedRoute>

2-  In Login Page
     after Login - navigate(location.state);