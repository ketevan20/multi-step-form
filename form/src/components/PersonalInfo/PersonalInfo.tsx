import { ErrorMessage, Field, Formik, type FormikProps } from 'formik';
import * as Yup from 'yup'
import TextContainer from '../TextContainer/TextContainer';

type PersonalInfoType = {
  formRef: React.RefObject<FormikProps<any> | null>;
}

const PersonalInfo = ({ formRef }: PersonalInfoType) => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("This field is required")
      .min(2, "First name must be at least 2 characters")
      .matches(/^[A-Za-z\s-]+$/, "First name must contain only letters"),

    email: Yup.string()
      .required("This field is required")
      .email("Looks like this is not an email"),

    phone: Yup.string()
      .required("This field is required")
      .matches(/^\+?[0-9]{7,15}$/, "Phone number is not valid"),
  });

  console.log("form rendered again");

  return (
    <>
      <TextContainer title="Personal Info" text="Please provide your name, email address, and phone number."/>
      <Formik
        innerRef={formRef}
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={() => {}}
        validationSchema={schema}>
        {({ errors, touched, handleSubmit  }) => (
          <form onSubmit={handleSubmit} className='text-[rgba(2,41,89,1)] text-[14px] font-normal flex flex-col gap-6'>
            <div>
              <div className='flex justify-between items-center mb-2'>
                <p>Name</p>
                <ErrorMessage name="name" component="p" className="text-[rgba(238,55,74,1)]" />
              </div>
              <Field name="name" placeholder="e.g. Stephen King" className={`w-full px-4 py-2 font-bold rounded-lg border border-[rgba(214,217,230,1)] placeholder:text-[rgba(150,153,170,1)] placeholder:font-medium placeholder:text-[16px] placeholder:leading-[120%] focus:outline-none focus:ring-1 focus:ring-[rgba(72,62,255,1)] ${errors.name && touched.name ? 'border-[rgba(238,55,74,1)] border' : ''}`}></Field>
            </div>
            <div>
              <div className='flex justify-between items-center mb-2'>
                <p>Email Address</p>
                <ErrorMessage name="email" component="p" className="text-[rgba(238,55,74,1)]" />
              </div>
              <Field name="email" placeholder="e.g. stephenking@lorem.com" className={`w-full px-4 py-2 font-bold rounded-lg border border-[rgba(214,217,230,1)] placeholder:text-[rgba(150,153,170,1)] placeholder:font-medium placeholder:text-[16px] placeholder:leading-[120%] focus:outline-none focus:ring-1 focus:ring-[rgba(72,62,255,1)] ${errors.email && touched.email ? 'border-[rgba(238,55,74,1)] border' : ''}`}></Field>
            </div>
            <div>
              <div className='flex justify-between items-center mb-2'>
                <p>Phone Number</p>
                <ErrorMessage name="phone" component="p" className="text-[rgba(238,55,74,1)]" />
              </div>
              <Field name="phone" placeholder="e.g. +1 234 567 890" className={`w-full px-4 py-2 font-bold rounded-lg border border-[rgba(214,217,230,1)] placeholder:text-[rgba(150,153,170,1)] placeholder:font-medium placeholder:text-[16px] placeholder:leading-[120%] focus:outline-none focus:ring-1 focus:ring-[rgba(72,62,255,1)] ${errors.phone && touched.phone ? 'border-[rgba(238,55,74,1)] border' : ''}`}></Field>
            </div>

          </form>
        )}
      </Formik>
    </>
  )
}

export default PersonalInfo

{/*  */ }