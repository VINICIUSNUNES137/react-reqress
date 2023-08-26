import './style.css'

export default function Card({ nome, email, urlFoto }) {
  return (
    <div className='card-container'>
      <img className='photo' src={urlFoto} />
      <div>
        <h3 className='name'>{nome}</h3>
        <span className='email'>{email}</span>
      </div>
    </div>
  )
}

