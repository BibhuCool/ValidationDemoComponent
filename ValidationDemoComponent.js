import { useFormik } from "formik";

function ValidateUser(userdetails){
    const errors = {};
    if(userdetails.Name==""){
        errors.Name = 'User Name required';
    }else if(userdetails.Name.length<4){
        errors.Name = 'User Name too short.. ';
    }else if(userdetails.Name.length>10){
        errors.Name = 'User Name too long..';
    }

    if(userdetails.Email==""){
        errors.Email = 'Email required';
    }else if(userdetails.Email.indexOf('@')<=2){
        errors.Email = 'Invalid Email';
    }

    if(userdetails.Mobile==""){
        errors.Mobile = 'Mobile required';
    }else if(userdetails.Mobile.match(/\+91[0-9]{10}/)){
        errors.Mobile = "";
    }else{
        errors.Mobile = "Invalid Mobile";
    }
    return errors;
}

export default function ValidationDemoComponent() {
    const formik = useFormik({
        initialValues : {
            Name:'',
            Email:'',
            Mobile:''
        },
        validate:ValidateUser,

        onSubmit:values => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <>
            <div className="container-fluid">
               <form onSubmit={formik.handleSubmit}>
               <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="Name" onBlur={formik.handleBlur} type="text" onChange={formik.handleChange} /></dd>
                    <dd>{formik.errors.Name}</dd>
                    <dt>Email</dt>
                    <dd><input name="Email" onBlur={formik.handleBlur} type="text" onChange={formik.handleChange} /></dd>
                    <dd>{formik.errors.Email}</dd>
                    <dt>Mobile</dt>
                    <dd><input name="Mobile" onBlur={formik.handleBlur} type="text" onChange={formik.handleChange} /></dd>
                    <dd>{formik.errors.Mobile}</dd>
                </dl>
                <button className="btn btn-primary">Register</button>
               </form>
            </div>
        </>
    )
}