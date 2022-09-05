import './styles.css'
import { useState } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import api from '../../services/api'

function Register() {
    const [form, setForm] = useState({ phone: '', message: ''})
    const [error, setError] = useState(false)

    const handleChange = e => {
        const key = e.target.name
        const value = e.target.value

        setForm(old => ({
            ...old,
            [key]: value
        }))
    }


    const handleSubmit = async e => {
        e.preventDefault()
        console.log(form)

        if (!form.phone || !form.message) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
            return
        }

        try {
            await api.post('/', {
                to: form.phone, 
                message: form.message,
            })
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (error) {
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }

    }

    return (
        <div className="form-container">
            <Form className='register__form'>
                <img src="https://saltsystems.com.br/logo_salt.png" alt="logo SaltSystems" className='mb-4' />

                <Form.Group className='mb-4 size'>
                    <FloatingLabel  label='Telefone'>
                        <Form.Control
                            name='phone'
                            value={form.phone}
                            onChange={handleChange}
                            id="phone"
                            placeholder="Telefone"
                        />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className='mb-4 size'>
                    <FloatingLabel className='input__title' htmlFor="email" label='Mensagem'>
                        <Form.Control
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            id="message"
                            placeholder="Mensagem"
                        />
                    </FloatingLabel>
                </Form.Group>

                <Button 
                    onClick={handleSubmit}
                >
                    Enviar
                </Button>

                {error && <span className='error'>Todos os campos são obrigatórios</span>}
            </Form>

        </div>
    )
}

export default Register