import "../Style/AgentCard.css"
import { motion } from "framer-motion"
const AgentCard = ({name, role , description, image , delay = 0 , onClick }) => {
  return (
    <motion.div className="agent-card" initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.9, delay: delay, ease: "easeOut" }} 
      viewport={{ once: true }} 
      onClick={onClick}>
        <img src={image} alt={name} width="150" />
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="description">{description?.slice(0, 120)}...</p>
    </motion.div>
  )
}

export default AgentCard
