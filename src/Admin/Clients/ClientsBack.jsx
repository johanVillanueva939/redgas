import { useState } from 'react'
import { DeleteModal } from './Delete/DeleteModal'
import { GetModal } from './Get/GetModal'
import { RegisterModal } from './Register/RegisterModal'
import { UpdateModal } from './Update/UpdateModal'
import { ButtonBack } from '../UI/ButtonBack/ButtonBack'

export const ClientsBack = () => {
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [showGetModal, setShowGetModal] = useState(false)
	const [showRegisterModal, setShowRegisterModal] = useState(false)
	const [showUpdateModal, setShowUpdateModal] = useState(false)


	return (
		<div className="p-[20px_0_0_20px] flex items-start gap-[20px] justify-start h-screen">
			<div className='flex items-center gap-[20px] justify-center'>
				<h1 className='font-bold text-[20px]'>Cliente BACK-OFFICE</h1>
				<ButtonBack ClickMod={() => setShowRegisterModal(true)} Child='Registrar' />
				<ButtonBack ClickMod={() => setShowGetModal(true)} Child='Consultar' />
				<ButtonBack ClickMod={() => setShowUpdateModal(true)} Child='Actualizar' />
				<ButtonBack ClickMod={() => setShowDeleteModal(true)} Child='Eliminar' />
			</div>

			{showRegisterModal && (
				<RegisterModal onClose={() => setShowRegisterModal(false)} />
			)}

			{showGetModal && (
				<GetModal onClose={() => setShowGetModal(false)} />
			)}

			{showUpdateModal && (
				<UpdateModal onClose={() => setShowUpdateModal(false)} />
			)}

			{showDeleteModal && (
				<DeleteModal onClose={() => setShowDeleteModal(false)} />
			)}
		</div>
	)
}
export default ClientsBack;
