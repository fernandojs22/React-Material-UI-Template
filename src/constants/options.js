import {
    Dashboard as DashboardIcon,
    PowerSettingsNew as PowerSettingsNewIcon
} from '@material-ui/icons'

import { DASHBOARD, SIGNIN } from './paths'

export const options = [
    {
        path: DASHBOARD.PATH,
        text: 'Dashboard',
        icon: <DashboardIcon />
    },
    ,
    {
        path: SIGNIN.PATH,
        text: 'Logout',
        icon: <PowerSettingsNewIcon />
    },
]