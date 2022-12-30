import loading from 'src/assets/loading.svg'
import styled from 'styled-components'

const StyledSpinner = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '20rem' }}>
      <StyledSpinner>
        <img src={loading} alt="Loading" />
      </StyledSpinner>
    </div>
  )
}
