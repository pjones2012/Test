import styles from '../styles/linkPage.module.css'

export default function TestimonialCard(props) {
  return (
    <div className={styles.card}>
      <span>
        "{props.testimonials}"
      </span>
      <p>
        {`-${props.name}`}
      </p>
    </div>
  )
}
