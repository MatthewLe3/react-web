import Login from '../pages/Login'
import ContentPage from '../pages/Content'

import Advanced from '../components/Advanced'
import AdvancedForm from '../components/AdvancedFrom'
import Basic from '../components/Basic'
import BasicForm from '../components/BasicForm'
import BasicList from '../components/BasicList'
import CardList from '../components/CardList'
import Center from '../components/Center'
import Error from '../components/Error'
import Fail from '../components/Fail'
import Flow from '../components/Flow'
import Home from '../components/Home'
import Koni from '../components/Koni'
import Mind from '../components/Mind'
import NotFound from '../components/NotFound'
import Setting from '../components/Setting'
import StepFrom from '../components/StepFrom'
import Success from '../components/Success'
import TableList from '../components/TableList'
import Unused from '../components/Unused'

const routes = [
    {
		path: '/login',
		component: Login
	},
	{
		path: '/content',
        component: ContentPage,
        children:[
            {
                path:'/content/home',
                component:Home
            },
            {
                path:'/content/basic-form',
                component:BasicForm
            },
            {
                path:'/content/step-form',
                component:StepFrom
            },
            {
                path:'/content/advanced-form',
                component:AdvancedForm
            },
            {
                path:'/content/table-list',
                component:TableList
            },
            {
                path:'/content/basic-list',
                component:BasicList
            },
            {
                path:'/content/card-list',
                component:CardList
            },
            {
                path:'/content/basic',
                component:Basic
            },
            {
                path:'/content/advanced',
                component:Advanced
            },
            {
                path:'/content/success',
                component:Success
            },
            {
                path:'/content/fail',
                component:Fail
            },
            {
                path:'/content/403',
                component:Unused
            },
            {
                path:'/content/404',
                component:NotFound
            },
            {
                path:'/content/500',
                component:Error
            },
            {
                path:'/content/center',
                component:Center
            },
            {
                path:'/content/setting',
                component:Setting
            },
            {
                path:'/content/flow',
                component:Flow
            },
            {
                path:'/content/mind',
                component:Mind
            },
            {
                path:'/content/koni',
                component:Koni
            },
        ]
	}
]

export default routes