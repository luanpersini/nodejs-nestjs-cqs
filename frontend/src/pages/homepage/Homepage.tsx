import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ListWrapper } from 'src/components/elements/ListWrapper'
import { CustomTable } from 'src/components/elements/table'
import { Button } from 'src/components/general'
import { PageTitle } from '../../components/template/page-title'
import { Page } from '../../interfaces/page'
import { accountId, makeAccountOperation, OperationsList, SourcesList } from './AccountOperationFactory'
import { useGetAccountBalance } from './api/useGetAccountBalance'
import { useGetAccountOperationsList } from './api/useGetAccountOperations'
import { useNewAccountOperation } from './api/useNewAccountOperation'

export function Homepage(props: Page) {
  const { newAccountOperation: newDeposit } = useNewAccountOperation(OperationsList.deposit.name)
  const { newAccountOperation: newWithdraw } = useNewAccountOperation(OperationsList.withdraw.name)
  const navigate = useNavigate()
  const headers = ['Data', 'Amount', 'Operation', 'Source', 'ID']
  const lines = ['createdAt', 'amount', 'operation', 'source', 'id']
  const { listAccountOperations } = useGetAccountOperationsList(accountId)
  const accountOperations = listAccountOperations()
  const { showBalance } = useGetAccountBalance(accountId)
  const balance = showBalance()

  const DepositButton = () => {
    return (
      <Button
        onClick={(evt: FormEvent) => {
          newDeposit(makeAccountOperation({ operationId: OperationsList.deposit.id, sourceId: SourcesList.terminal.id, amount: '100.00' }))
        }}
        label="Deposit 100"
      />
    )
  }

  const WithdrawButton = () => {
    return (
      <Button
        onClick={(evt: FormEvent) => {
          newWithdraw(makeAccountOperation({ operationId: OperationsList.withdraw.id, sourceId: SourcesList.terminal.id, amount: '100.00' }))
        }}
        label="Withdraw 100"
      />
    )
  }

  return (
    <div>
      <PageTitle title="Welcome!" />
      <p>Use the buttons bellow to make operations.</p>
      <p>
        <DepositButton />
        <WithdrawButton />
        {balance !== undefined && <span style={{ float: 'right', fontSize: '1rem', fontWeight: 'bold' }}>Ballance: {balance}</span>}
      </p>
      <ListWrapper isLoading={false} data={accountOperations}>
        <CustomTable headers={headers} lines={lines} data={accountOperations} tablestyle={'table-striped'} headerstyle={'table-dark'} />
      </ListWrapper>
    </div>
  )
}
