/* eslint-disable @typescript-eslint/ban-types */

export interface FormSubmitErrorProps {
  submitErrors: string | undefined
}

export function FormSubmitErrorMessage({ submitErrors }: FormSubmitErrorProps) {
  if (submitErrors) {
    return <div className="alert alert-danger" style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>{submitErrors}</div>
  }
  return null
}
