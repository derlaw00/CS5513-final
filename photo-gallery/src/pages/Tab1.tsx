import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, {useState, useEffect} from 'react';
import './Tab1.css';
import { useFormState } from 'react-dom';



const Tab1: React.FC = () => {

  const [data, setData] = useState<any[]>([]);

  const DATA_URL = "https://dev-cs5513-dl-week11.pantheonsite.io/wp-json/wp/v2/california-image?acf_format=standard";

  useEffect(() =>{
      fetch(DATA_URL)
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>California Pictures</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">California Pictures</IonTitle>
          </IonToolbar>
        </IonHeader>
        {
          data.map((item, index)=>(
            <IonCard key={index} color="success">
              <img src={item.acf.image}/>
              <IonCardHeader>
                <IonCardTitle>{item.title.rendered}</IonCardTitle>
                <IonCardSubtitle>{item.acf.date + " " + item.acf.time}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>{item.acf.description}</IonCardContent>
            </IonCard>
          ))
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
