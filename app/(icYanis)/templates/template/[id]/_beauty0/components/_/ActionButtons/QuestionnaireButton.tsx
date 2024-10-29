import React from 'react';
import Modal from '../Modal';

interface QuestionnaireButtonProps {
  onModalOpen: (modalId: string) => void;
  data: {
    icon: any;
    label: string;
    href: string;
    modalContent: {
      title: string;
      content: string;
    };
  };
  isModalOpen: boolean;
  onModalClose: () => void;
}

const QuestionnaireModal = () => (
  <div className="questionnaire-modal">
    <form className="questionnaire-form">
      <div className="form-section">
        <h3>Informations générales</h3>
        <div className="form-group">
          <label>Avez-vous déjà été client chez nous ?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="previous-client" value="yes" />
              <span>Oui</span>
            </label>
            <label>
              <input type="radio" name="previous-client" value="no" />
              <span>Non</span>
            </label>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Vos préférences</h3>
        {[
          {
            question: "Type de service recherché",
            options: ["Coupe", "Coloration", "Coiffure", "Soin", "Autre"],
            type: "checkbox"
          },
          {
            question: "Moment de préférence",
            options: ["Matin", "Après-midi", "Soirée", "Week-end"],
            type: "checkbox"
          },
          {
            question: "Budget envisagé",
            options: ["< 50€", "50-100€", "100-150€", "> 150€"],
            type: "radio"
          }
        ].map((item, index) => (
          <div key={index} className="form-group">
            <label>{item.question}</label>
            <div className={`${item.type}-group`}>
              {item.options.map((option, optIndex) => (
                <label key={optIndex}>
                  <input 
                    type={item.type} 
                    name={`question-${index}`}
                    value={option.toLowerCase()}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="form-section">
        <h3>Besoins spécifiques</h3>
        <div className="form-group">
          <label>Avez-vous des allergies ou sensibilités particulières ?</label>
          <textarea 
            rows={3} 
            placeholder="Décrivez vos allergies ou sensibilités..."
          ></textarea>
        </div>
        <div className="form-group">
          <label>Objectifs souhaités</label>
          <textarea 
            rows={3} 
            placeholder="Décrivez le résultat que vous souhaitez obtenir..."
          ></textarea>
        </div>
      </div>

      <div className="form-section">
        <h3>Contact préféré</h3>
        <div className="form-group">
          <label>Comment souhaitez-vous être contacté(e) ?</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="contact-email" />
              <span>Email</span>
            </label>
            <label>
              <input type="checkbox" name="contact-phone" />
              <span>Téléphone</span>
            </label>
            <label>
              <input type="checkbox" name="contact-sms" />
              <span>SMS</span>
            </label>
          </div>
        </div>
      </div>

      <button type="submit" className="submit-questionnaire">
        Envoyer mes réponses
      </button>
    </form>
  </div>
);

export const QuestionnaireButton = ({ 
  onModalOpen, 
  data, 
  isModalOpen, 
  onModalClose 
}: QuestionnaireButtonProps) => (
  <>
    <button 
      onClick={() => onModalOpen('questionnaire')}
      className="questionnaire-button"
      title="Questionnaire préalable"
    >
      <data.icon size={18} />
    </button>

    <Modal
      isOpen={isModalOpen}
      onClose={onModalClose}
      title={data.modalContent.title}
    >
      <QuestionnaireModal />
    </Modal>
  </>
); 