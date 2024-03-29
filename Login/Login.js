// IMPORTS

import { Container } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { ContentAccount } from "../../components/Link/style"
import { LinkAccount } from "../../components/Link/style"
import { LinkMedium } from "../../components/Link/style"
import { TextAccount } from "../../components/Link/style"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/Button/style"
import { ButtonGoogle } from "../../components/Button/style"
import { ButtonTitleGoogle } from "../../components/Button/style"

import { Linking } from "react-native"
import { AntDesign } from '@expo/vector-icons';

// EXPORT

export const Login = () => {
    return(
        <Container>
            <Logo source={require('../../assets/Logo.png')} />

            <Title>Entrar ou criar conta</Title>

            <Input
            placeholder={'Usuário ou E-mail'}/>

            <Input
            placeholder={'Senha'}
            />

            <LinkMedium onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>Esqueceu sua senha?</LinkMedium>


            <Button>
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Button>


            <ButtonGoogle>
                <AntDesign name="google" size={16} color="#496BBA" />
                <ButtonTitleGoogle >ENTRAR COM GOOGLE</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount>
                <LinkAccount onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>Crie uma conta agora!</LinkAccount>
            </ContentAccount>
            
        </Container>
    )
}