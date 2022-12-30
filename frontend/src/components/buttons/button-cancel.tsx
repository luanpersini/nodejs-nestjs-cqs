import { Button } from './button'
export function ButtonCancel(props: any) {  
  return <Button {...props} />    
 
}
ButtonCancel.defaultProps = { 
  className: 'btn btn-secondary',
  type: 'reset',
  label: 'Cancel',
  onClick: () => {    
    history.back()
},  
}