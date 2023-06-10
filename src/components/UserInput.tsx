import { forwardRef, ForwardedRef } from "react"
import { Form, FormGroup, InputGroup, FormControl } from "react-bootstrap"

interface Props {
  type: string
}

const UserInput = forwardRef(
  ({ type }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    let label

    if (type === "weight") {
      label = <Form.Label>น้ำหนัก (kg)</Form.Label>
    } else if (type === "height") {
      label = <Form.Label>ส่วนสูง (m)</Form.Label>
    }
    return (
      <>
        <FormGroup>
          {label}
          <InputGroup>
            <FormControl
              type="number"
              name={type}
              ref={ref}
              max={200}
              min={0}
            />
          </InputGroup>
        </FormGroup>
      </>
    )
  }
)

export default UserInput
