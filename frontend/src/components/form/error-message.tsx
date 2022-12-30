/* eslint-disable @typescript-eslint/ban-types */

interface ErrorProps {
  name: any
  errors: string[] | undefined
}

export function ErrorMessage({ errors, name }: ErrorProps) {
  if (errors && errors[name]) {
    return <div className="alert alert-danger mt-1" style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>{errors[name]}</div>
  }
  return null
}
