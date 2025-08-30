// src/pages/Register.jsx
import React, { useState } from 'react';
import api from '../Api';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [form, setForm] = useState({ name:'', email:'', password:'', phone:'' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try{
      await api.post('/auth/register', form);
      const login = await api.post('/auth/login', { email: form.email, password: form.password });
      localStorage.setItem('token', login.data.token);
      localStorage.setItem('user', JSON.stringify(login.data.user));
      navigate('/dashboard');
    }catch(err){
      setMsg(err?.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'flex-start',   // push to top
      minHeight:'100vh',
      background:'#f9f9f9',
      paddingTop:'60px'
    }}>
      <div style={{
        maxWidth:440,
        width:'100%',
        padding:'35px',
        background:'#fff',
        borderRadius:'8px',
        boxShadow:'0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{marginBottom:'16px', textAlign:'center'}}>Create an account</h3>
        <form onSubmit={submit} style={{display:'flex', flexDirection:'column', gap:'12px'}}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({...form, name:e.target.value})}
            style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px'}}
          />
          <input
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({...form, email:e.target.value})}
            style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px'}}
          />
          <input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={e => setForm({...form, password:e.target.value})}
            style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px'}}
          />
          <input
            placeholder="Phone"
            value={form.phone}
            onChange={e => setForm({...form, phone:e.target.value})}
            style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px'}}
          />
          <button
            type="submit"
            style={{
              padding:'10px',
              background:'#28a745',
              border:'none',
              color:'#fff',
              borderRadius:'4px',
              cursor:'pointer'
            }}
            onMouseOver={e => e.currentTarget.style.background='#1e7e34'}
            onMouseOut={e => e.currentTarget.style.background='#28a745'}
          >
            Create account
          </button>
        </form>
        {msg && <p style={{color:'crimson', marginTop:'10px', fontSize:'14px'}}>{msg}</p>}
      </div>
    </div>
  );
}
