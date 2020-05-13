import React from 'react';
import Card from './Card';

const List = (props) => {
  const handleTitle = () => {};

  // console.log(props.list, 'list');

  // const cardElement = props.list.map((card, index) => {
  //   return <Card key={index} card={card} />;
  // });

  const renderInput = () => {
    return <input className="app-list-input form-control form-control-sm" placeholder="Tareas importantes" type="text" value="Backlog" title="Editar el título de la lista" onChange={handleTitle} />;
  };

  const renderEllipsis = () => {
    return <span className="pl-2 pr-2 text-white-50 fas fa-ellipsis-v"></span>;
  };

  const renderDeleteButton = () => {
    return (
      <button type="button" className="btn btn-light text-muted border shadow-sm" title="Borrar esta tarjeta">
        <span className="fas fa-trash-alt"></span>
      </button>
    );
  };

  const renderLeftButton = () => {
    return (
      <button type="button" className="btn btn-light text-muted border shadow-sm app-list-move-left" title="Mover esta lista hacia la izquierda">
        <span className="fas fa-arrow-left"></span>
      </button>
    );
  };

  const renderRightButton = () => {
    return (
      <button type="button" className="btn btn-light text-muted border shadow-sm app-list-move-right" title="Mover esta lista hacia la derecha">
        <span className="fas fa-arrow-right"></span>
      </button>
    );
  };

  const renderNewCardButton = () => {
    return (
      <button type="button" className="ml-1 btn btn-primary btn-sm text-white-50" title="Añadir una nueva tarjeta">
        <span className="fas fa-plus"></span> Añadir otra tarjeta
      </button>
    );
  };

  return (
    <div className="app-list">
      <div className="p-1 rounded-sm bg-primary shadow">
        <form className="app-list-form align-middle p-1 position-relative">
          {renderInput()}
          <div className="app-list-options">
            {renderEllipsis()}
            <div className="app-list-btns btn-group btn-group-sm">
              {renderDeleteButton()}
              {renderLeftButton()}
              {renderRightButton()}
            </div>
          </div>
        </form>
        <Card />
        <Card />
        {renderNewCardButton()}
      </div>
    </div>
  );
};

export default List;