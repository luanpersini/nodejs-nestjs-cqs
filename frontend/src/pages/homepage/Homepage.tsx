import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ListWrapper } from 'src/components/elements/ListWrapper'
import { CustomTable } from 'src/components/elements/table'
import { Button } from 'src/components/general'
import { PageTitle } from '../../components/template/page-title'
import { Page } from '../../interfaces/page'
import { accountId, makeAccountOperation, OperationsList, SourcesList } from './AccountOperationFactory'
import { useGetAccountOperationsList } from './api/useGetAccountOperations'
import { useNewAccountOperation } from './api/useNewAccountOperation'

export function Homepage(props: Page) {
  const { newAccountOperation: newDeposit } = useNewAccountOperation(OperationsList.deposit.name)
  // const { newAccountOperation: newWithdraw } = useNewAccountOperation(OperationTypes.WITHDRAW)
  const navigate = useNavigate()
  const headers = ['ID', 'Operation', 'Source', 'Amount', 'Data']
  const lines = ['id', 'operation', 'source', 'amount', 'createdAt']
  const { listAccountOperations } = useGetAccountOperationsList(accountId)
  const accountOperations = listAccountOperations()

  type OperationButtonProps = {
    label: string
    amount: string
    operationId: string
  }
  
  const OperationButton = ({ label, amount, operationId }: OperationButtonProps) => {
    return (
      <Button
        onClick={(evt: FormEvent) => {
          newDeposit(makeAccountOperation({ operationId, sourceId: SourcesList.terminal.id, amount: '100.00' }))
        }}
        label={label}
      />
    )
  }

  return (
    <div>
      <PageTitle title="Welcome!" />
      <p>Use the buttons bellow to make operations.</p>
      <p>
        <OperationButton label={'Deposit 100'} amount={'100'} operationId={OperationsList.deposit.id} />
        <OperationButton label={'Withdraw 100'} amount={'100'} operationId={OperationsList.withdraw.id} />
      </p>
      <ListWrapper isLoading={false} data={accountOperations}>
        <CustomTable headers={headers} lines={lines} data={accountOperations} tablestyle={'table-striped'} headerstyle={'table-dark'} />
      </ListWrapper>
    </div>
  )
}
