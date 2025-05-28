import DasboardComponent from '@/Features/Dashboard/Dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: DasboardComponent,
})

