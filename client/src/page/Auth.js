import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, ListGroup, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/UserApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router";


const Auth = observer(() => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const history = useNavigate()
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)

            }
            user.setUser(user)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        }catch (e) {
            alert(e.response.data.message)
        }

    }


    return (
        <Container className=" d-flex  justify-content-center align-items-center p-5">

            <Card className=" shadow p-3 mb-5 bg-white rounded">
                <h3 className="m-auto mb-3">{isLogin ? 'АВТОРИЗАЦИЯ' : 'РЕГИСТРАЦИЯ'}</h3>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email адрес</Form.Label>
                        <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email"
                                      placeholder="Email"/>

                        <Form.Text className="text-muted">
                            Никому не называйте свои личные данные для входа.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password"
                                      placeholder="Пароль"/>
                    </Form.Group>


                    <Button onClick={click} variant="outline-success" className="btn  w-100">
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                    <Row>
                        {isLogin ?
                            <div>или <NavLink to={REGISTRATION_ROUTE}> Зарегистрироваться</NavLink></div> :
                            <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войти</NavLink></div>
                        }
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;