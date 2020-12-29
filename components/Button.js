import styles from './Button.module.css'

export function Button({ name, setIsBetUp }) {
  function handleClick(event) {
    const name = event.target.getAttribute('name')
    setIsBetUp(name === 'up' ? true : false)
  }
  return (
    <a
      type="button"
      name={name}
      className="btn btn-primary"
      onClick={handleClick}
    >
      {name}
    </a>
  )
}
