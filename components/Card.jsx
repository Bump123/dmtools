import React, {useState} from 'react'
import TextInput from '@/components/TextInput'

const Card = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [ac, setAC] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleACChange = (event) => {
        setAC(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
          name: name,
          ac: ac
        };
        onSubmit(formData); 
      };

      return (
        <div className="card-container">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Create a Unit</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  value={name}
                  onChange={handleNameChange}
                />
                <input
                  type="text"
                  placeholder="AC"
                  className="input input-bordered"
                  value={ac}
                  onChange={handleACChange}
                />
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" type="submit">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };

export default Card
