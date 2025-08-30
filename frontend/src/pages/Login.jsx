// src/pages/Login.jsx
import React, { useState } from 'react';
import api from '../Api';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [form, setForm] = useState({ email:'', password:'' });
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try{
      const res = await api.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    }catch(error){
      setErr(error?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'flex-start',   // push to top
      minHeight:'100vh',
      background:'#f9f9f9',
      paddingTop:'60px'          // spacing from top
    }}>
      <div style={{
        maxWidth:420,
        width:'100%',
        padding:'35px',
        background:'#fff',
        borderRadius:'8px',
        boxShadow:'0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{marginBottom:'16px', textAlign:'center'}}>Login</h3>
        <form onSubmit={submit} style={{display:'flex', flexDirection:'column', gap:'12px'}}>
          <input
            className="input"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({...form, email:e.target.value})}
            style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px'}}
          />
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({...form, password:e.target.value})}
            style={{padding:'10px', border:'1px solid #ccc', borderRadius:'4px'}}
          />
          <button
            className="btn btn-primary"
            type="submit"
            style={{
              padding:'10px',
              background:'rgb(40, 167, 69)',
              border:'none',
              color:'#fff',
              borderRadius:'4px',
              cursor:'pointer'
            }}
            onMouseOver={e => e.currentTarget.style.background='rgba(50, 136, 70, 1)'}
            onMouseOut={e => e.currentTarget.style.background='rgb(40, 167, 69)'}
          >
            Login
          </button>
        </form>
        {err && <p style={{color:'crimson', marginTop:'10px', fontSize:'14px'}}>{err}</p>}
        <p style={{fontSize:'14px', marginTop:'10px', textAlign:'center'}}>
          Use demo: <strong>demo@demo.com</strong> / <strong>DemoPass123</strong>
        </p>
      </div>
    </div>
  );
}
