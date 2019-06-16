import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';

export const Form = (props) => {
    const {
     values: { title, description, category_id, price },
     categories = [],
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

    let menuList =
      categories.map((c, index) => {
        return <MenuItem value={c.id}>
          {c.name}
        </MenuItem>
      })

  return (
      <form
          onSubmit={handleSubmit}
        >
     <TextField
       id="title"
       name="title"
       helperText={touched.title ? errors.title : ""}
       error={touched.title && Boolean(errors.title)}
       label="Title"
       value={title}
       onChange={change.bind(null, "title")}
       fullWidth

     />
     <TextField
       id="description"
       name="description"
       multiline
       rows='6'
       helperText={touched.description ? errors.description : ""}
       error={touched.description && Boolean(errors.description)}
       label="Description"
       fullWidth
       value={description}
       onChange={change.bind(null, "description")}
     />
      <Select
        fullWidth
        value={category_id}
        onChange={change.bind(null, "category_id")}
        inputProps={{
          name: 'category_id',
          id: 'category_id',
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        { menuList}
      </Select>

     <TextField
       id="price"
       name="price"
       helperText={touched.price ? errors.price : ""}
       error={touched.price && Boolean(errors.price)}
       label="Price"
       fullWidth
       value={price}
       onChange={change.bind(null, "price")}

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
