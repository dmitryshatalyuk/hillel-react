import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { validateEmail } from "./validation";
import { UserInfo } from "./UserInfo";

export function FormComponent(formData) {
  formData = {
    name: "",
    email: "",
    phone: "",
  };

  const [formValues, receiveForm] = useState(formData);
  const [userInfoVisibility, setVisible] = useState(false);

  return (
    <>
      <div className="form_box">
        <h2 className="form_title">Fill the form</h2>
        <Formik
          initialValues={formData}
          onSubmit={(values) => {
            receiveForm(values);
            setVisible(true);
          }}
        >
          <Form>
            <Field
              className="input"
              type="text"
              name="name"
              placeholder="Your name:"
              required
            />
            <Field
              className="input"
              type="email"
              name="email"
              validate={validateEmail}
              placeholder="Your email:"
              required
            />
            <Field
              className="input"
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="111-111-1111"
              required
            />

            <button type="submit" className="btn">Submit</button>
          </Form>
        </Formik>

        <UserInfo {...formValues} visibility={userInfoVisibility}/>
      </div>
    </>
  );
}
