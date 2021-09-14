import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import ListPage from './pages/ListPage';
import TodoDetail from './pages/TodoDetail';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useRouteMatch();
    console.log("match: ", match);
    
    return (
        <div>
            TODO SHARED TODO

            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={TodoDetail} exact />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default TodoFeature;