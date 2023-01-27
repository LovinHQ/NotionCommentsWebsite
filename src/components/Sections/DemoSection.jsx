import { Container } from '../Container'
import Image from 'next/image'
import screenshotExpenses from '@/images/screenshots/expenses.png'

export function Demo() {
  return (
    <Container>
      <div className="flex-1 overflow-hidden rounded-3xl bg-[var(--bg-sub)] shadow-xl">
        <Image
          src={screenshotExpenses}
          alt="NotionComments product demo"
          width="0"
          height="0"
        />
      </div>
    </Container>
  )
}
