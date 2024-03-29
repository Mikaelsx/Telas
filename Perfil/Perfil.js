import { Container  } from "../../components/Container/style"
import { SafeInputBox } from "../../components/Container/style"
import { Scroll } from "../../components/Container/style"
import { UseHeader } from "../../components/Logo/style"
import { InputBox } from "../../components/Input/style"
import { InputPaciente } from "../../components/Input/style"
import { InputPacientePequeno } from "../../components/Input/style"
import { OutPut } from "../../components/Input/style"
import { Title } from "../../components/Title/style"
import { TitleInput } from "../../components/Title/style"
import { SubTitle } from "../../components/Title/style"
import { SubTitleBox } from "../../components/Title/style"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/Button/style"



export const Perfil = () => {
    return(
        <Container>
        
        {/* IMAGEM DO PACIENTE */}
            <UseHeader source={require('../../assets/Paciente.png')}></UseHeader>

        {/* CAIXA QUE CONTEM O NOME E O EMAIL */}
            <SubTitleBox>

            <Title>Richard Kosta</Title>

            <SubTitle>richard.kosta@gmail.com</SubTitle>

            </SubTitleBox>
        
        {/* BARRA DE ROLAGEM DE TELA */}

            <Scroll>

        {/* INPUTS */}

            <SafeInputBox>
            <TitleInput>Data de nascimento:</TitleInput>
            <InputPaciente placeholder={'00/00/0000'}/>
            </SafeInputBox>

            <SafeInputBox>
            <TitleInput>CPF:</TitleInput>
            <InputPaciente placeholder={'000000000-00'}/>
            </SafeInputBox>

            <SafeInputBox>
            <TitleInput>Endereço:</TitleInput>
            <InputPaciente placeholder={'Rua'}/>
            </SafeInputBox>

        {/* INPUTS PERSONALIZADOS */}

            <InputBox>

            <OutPut>
            <TitleInput>CEP:</TitleInput>
            <InputPacientePequeno placeholder={'00000-00'}/>
            </OutPut>

            <OutPut>
            <TitleInput>Cidade:</TitleInput>
            <InputPacientePequeno placeholder={'São Caetano - SP'}/>
            </OutPut>

            </InputBox>

        {/* BOTÕES */}

            <Button>
                <ButtonTitle>SALVAR</ButtonTitle>
            </Button>

            <Button>
                <ButtonTitle>EDITAR</ButtonTitle>
            </Button>

            </Scroll>

        </Container>
    )
}