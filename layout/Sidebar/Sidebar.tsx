import clsx from 'clsx'
import { SidebarProps } from './Sidebar.props'
import { Menu } from '../Menu/Menu'
import Logo from '../logo.svg'

import styles from './Sidebar.module.scss'

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={clsx(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>поиск</div>
      <Menu />
    </div>
  )
}
