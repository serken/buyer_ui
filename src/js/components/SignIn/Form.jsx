import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

export const Form = (props) => {
    const {
     values: { login, email, password },
     errors,
     touched,
     handleChange,
     handleSubmit,
     isValid,
     setFieldTouched
   } = props

   const change = (name, e) => {
     e.persist();
     handleChange(e);
     setFieldTouched(name, true, false);
   }

  return (
      <form
          onSubmit={handleSubmit}
        >
     <TextField
       id="login"
       name="login"
       helperText={touched.login ? errors.login : ""}
       error={touched.login && Boolean(errors.login)}
       label="Login / Email"
       value={login}
       onChange={change.bind(null, "login")}
       fullWidth

     />
     <TextField
       id="password"
       name="password"
       helperText={touched.password ? errors.password : ""}
       error={touched.password && Boolean(errors.password)}
       label="Password"
       fullWidth
       type="password"
       value={password}
       onChange={change.bind(null, "password")}

     />
     <Button
       type="submit"
       fullWidth
       variant="raised"
       color="primary"
       disabled={!isValid}
     >
       Submit
     </Button>
   </form>
 )
}
