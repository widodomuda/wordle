import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is a Harry Styles inspired clone of the game Wordle adapted by{' '}   
        <a
          href="https://twitter.com/chasm2018"
          className="underline font-bold"
          target="_blank"
          rel="noopener"
        >
           chasm2018
        </a>{' '}
      </p>
      <br/>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
          target="_blank"
          rel="noopener"
        >
          view the oiginal code here
        </a>{' '}
        and{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
          target="_blank"
          rel="noopener"
        >
          play the original game here
        </a>
      </p>
    </BaseModal>
  )
}
