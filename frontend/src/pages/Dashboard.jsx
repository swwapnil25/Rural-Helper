import React, { useEffect, useState } from 'react';
import api from '../Api';

export default function Dashboard(){
  const [bookings, setBookings] = useState([]);
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({ name:'', phone:'' });
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  useEffect(()=>{
    if(user){
      setProfile({ name: user.name || '', phone: user.phone || '' });
      fetchBookings();
    }
  }, []);

  async function fetchBookings(){
    try{
      const res = await api.get('/bookings');
      setBookings(res.data);
    }catch(err){
      console.error(err);
    }
  }

  async function saveProfile(){
    try{
      const res = await api.put(`/users/${user._id}`, profile);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert('Profile updated');
      setEditing(false);
    }catch(err){
      alert('Error saving profile');
    }
  }

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <div style={{display:'grid', gridTemplateColumns:'1fr 340px', gap:16}}>
        <div className="card">
          <h3>Your bookings</h3>
          {bookings.length === 0 ? <p className="small">No bookings yet</p> : (
            bookings.map(b => (
              <div key={b._id} style={{marginBottom:10, borderBottom:'1px solid #f0f0f0', paddingBottom:8}}>
                <div className="small">{new Date(b.createdAt).toLocaleString()}</div>
                {b.items.map(it => <div key={it.productId}>{it.name} x {it.qty} — ₹ {it.price * it.qty}</div>)}
                <div><strong>Total: ₹ {b.total}</strong></div>
              </div>
            ))
          )}
        </div>
        <div>
          <div className="card">
            <h3>Profile</h3>
            {!editing ? (
              <div>
                <div><strong>{profile.name}</strong></div>
                <div className="small">{profile.phone}</div>
                <button className="btn" onClick={() => setEditing(true)}>Edit</button>
              </div>
            ) : (
              <div>
                <input className="input" value={profile.name} onChange={e=>setProfile({...profile, name:e.target.value})} />
                <input className="input" value={profile.phone} onChange={e=>setProfile({...profile, phone:e.target.value})} />
                <button className="btn btn-primary" onClick={saveProfile}>Save</button>
              </div>
            )}
          </div>

          <div className="card" style={{marginTop:12}}>
            <h4>Quick Info</h4>
            <div className="small">Address: Village community center</div>
            <div className="small">Helpline: +91 98765 43210</div>
          </div>
        </div>
      </div>
    </div>
  );
}
