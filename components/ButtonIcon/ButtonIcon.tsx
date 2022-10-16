import clsx from 'clsx'
import { ButtonIconProps, icons } from './ButtonIcon.props'
import styles from './ButtonIcon.module.scss'

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const Icon = icons[icon]

  return (
    <button
      className={clsx(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.white]: appearance == 'white',
      })}
      {...props}
    >
      <Icon />
    </button>
  )
}
