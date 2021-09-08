import React from 'react';
import { Text } from 'react-native';
import { 
    Area, 
    DataArea,
    DataText,
    AvatarArea,
    AvatarText,
    InfoArea,
    InfoTitle,
    InfoText,
    TagArea,
    TagButton,
    TagButtonText,
 } from './styles';

export default ({data}) => {
    // return (
    //     <Area>
    //         <Avatar source={{uri: data.avatar}} />
    //         <InfoArea>
    //             <UserName>{data.name}</UserName>

    //             <Stars stars={data.stars} showNumber={true} />

    //             <TagButton>
    //                 <TagButtonText>Ver Perfil</TagButtonText>
    //             </TagButton>
    //         </InfoArea>
    //     </Area>
    // );

    const getMonthName = (month) => {
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", 
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"];

        return monthNames[month].substr(0, 3);
    }

    return (
        <Area>
            <DataArea>
                <DataText>{`${data.createdAt.toDate().getDate()} de ${getMonthName(data.createdAt.toDate().getMonth())}`}</DataText>
            </DataArea>
                
            {/* <AvatarArea>
                <AvatarText>{`${data.createdAt.toDate().getDate()}`}</AvatarText>
                <AvatarText>{`${data.createdAt.toDate().getMonth() + 1}`}</AvatarText>
            </AvatarArea> */}
            
            <InfoArea>
                
                <InfoTitle>{data.title}</InfoTitle>
                <InfoText>{data.description}</InfoText>
                {/* <UserName>{data.description}</UserName> */}

            </InfoArea>
            {/* <TagArea>
                <TagButton>
                    <TagButtonText>tag 1</TagButtonText>
                </TagButton>
                <TagButton>
                    <TagButtonText>tag 2</TagButtonText>
                </TagButton>
            </TagArea> */}
        </Area>
    );
}