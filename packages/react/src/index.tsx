import {ComponentProps} from 'react'
import { styled } from './styles/index'

export type ButtonProps = ComponentProps<typeof Button>

export const Button = styled('button', {
  fontFamily: '$default',
  background: '$ignite300',
  borderRadius: '$sm',
  color: '$white',
  border: 0,
  fontWeight: 'bold',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6'
      }
    }
  },

  defaultVariants: {
    size: 'small'
  }

})

