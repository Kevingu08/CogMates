import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom'
import { Homepage } from '../components/Homepage'
import { Instructions } from '../components/Instructions'
import { Board } from '../components/Board'
import { ROUTE_PATHS } from '.'


export function Routes(){
    return(
        <ReactRoutes>
            <Route path={ROUTE_PATHS.HOME} element={<Homepage />}></Route>
            <Route path={ROUTE_PATHS.INSTRUCTION} element={<Instructions />}></Route>
            <Route path={ROUTE_PATHS.BOARD} element={<Board />}></Route>
            <Route path={ROUTE_PATHS.NOT_FOUND} element={<Navigate to={'/'} />}></Route>
            {/* </section > */}
        </ReactRoutes>
    )
}