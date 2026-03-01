import { motion } from "framer-motion"
import "../Style/AgentModal.css"

const AgentModal = ({ agent, onClose }) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
  className="modal-content"
  initial={{ opacity: 0, y: 80, scale: 0.9 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -12, 0]   // ← flottement ici
  }}
  exit={{ opacity: 0, y: 40, scale: 0.95 }}
  transition={{
    opacity: { duration: 0.6 },
    scale: { duration: 0.6 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }}
  onClick={(e) => e.stopPropagation()}
>
        
        <img src={agent.fullPortrait} alt={agent.displayName} />

        <h2>{agent.displayName}</h2>
        <p class="role">{agent.role?.displayName}</p>
        <p class="description">{agent.description}</p>

        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  )
}

export default AgentModal