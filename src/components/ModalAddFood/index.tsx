import { useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: FoodInput) => void;
}

interface FoodInput {
  image: string;
  name: string;
  description: string;
  price: string;
}

const ModalAddFood = ({ isOpen, setIsOpen, handleAddFood}: ModalAddFoodProps) => {
  const [data, setData] = useState<FoodInput>({
    image: '',
    name: '',
    description: '',
    price: '',
  } as FoodInput);

  async function handleSubmit(data: FoodInput) {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input 
          name="image" 
          icon=""
          placeholder="Cole o link aqui"
          value={data.image} 
          onChange={(event: { target: { value: any; }; }) => setData({
            ...data,
            image: event.target.value,
          })}
        />

        <Input 
          name="name" 
          icon=""
          placeholder="Ex: Moda Italiana" 
          value={data.name} 
          onChange={(event: { target: { value: any; }; }) => setData({
            ...data,
            name: event.target.value,
          })}
        />
        <Input 
          name="price" 
          icon=""
          placeholder="Ex: 19.90" 
          value={data.price} 
          onChange={(event: { target: { value: any; }; }) => setData({
            ...data,
            price: event.target.value,
          })}
        />

        <Input 
          name="description" 
          icon=""
          placeholder="Descrição" 
          value={data.description}
          onChange={(event: { target: { value: any; }; }) => setData({
            ...data,
            description: event.target.value,
          })}
        />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
