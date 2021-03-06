import { useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface FoodDTO {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  available: boolean;
}
interface FoodInput {
  image: string;
  name: string;
  description: string;
  price: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodDTO;
  handleUpdateFood: (food: FoodInput) => void;
}

const ModalEditFood = ({ isOpen, setIsOpen, editingFood, handleUpdateFood }: ModalEditFoodProps) => {
  const [data, setData] = useState<FoodInput>({
    image: '',
    name: '',
    description: '',
    price: '',
  } as FoodDTO);

  async function handleSubmit(data: FoodInput) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input 
          name="image" 
          placeholder="Cole o link aqui" 
          onChange={(event: { target: { value: any; }; }) => setData({
            ...data,
            image: event.target.value,
          })}
        />

        <Input 
          name="name" 
          placeholder="Ex: Moda Italiana" 
          onChange={(event: { target: { value: any; }; }) => setData({
            ...data,
            name: event.target.value,
          })}
        />

        <Input 
          name="price" 
          placeholder="Ex: 19.90" 
          onChange={(event: { target: { value: any; }; }) => setData({
            ...data,
            price: event.target.value,
          })}
        />

        <Input 
          name="description" 
          placeholder="Descrição" 
          onChange={(event: { target: { value: any; }; }) => setData({
            ...data,
            description: event.target.value,
          })}
        />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
