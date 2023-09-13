import { screen, waitFor } from "@testing-library/react"
import user from "@testing-library/user-event";
import { render } from "../test-utils";
import Cita from "../features/quote/Cita";
import { testQuotes } from "./testQuotes";

const renderByDefault =()=>{
    render(<Cita/>);
}

describe('Citas', () => {
    describe('First rendering of the page', () => {
        it('Should not see quotes', async () => {
            renderByDefault();
            const author = screen.queryByText(/homer simpson/i);
            expect(author).not.toBeInTheDocument();
        });
        it('Should display a get quote button', async () => {
            renderByDefault();
            const button_quote = screen.getByRole('button', {  name: /obtener cita/i})
            expect(button_quote).toBeInTheDocument();
        });
        it('Should display a delete button', async () => {
            renderByDefault();
            const button_delete = screen.getByRole('button', { name: /borrar/i})
            expect(button_delete).toBeInTheDocument();
        });
        it('Should display a random quote', async () => {
            renderByDefault()
            const button =  screen.getByRole('button', {name: /obtener cita/i})
            await user.click(button);
            const text_notFound = screen.queryByText(/no se encontro ninguna cita/i)
            expect(text_notFound).not.toBeInTheDocument();
        });
    });
    describe('Correct loading of quotations', () => {
        it('Should display quote after clicking "Obtener cita" button', async () => {
            renderByDefault()
            user.setup()
            const input = screen.getByRole('textbox', {name: /author cita/i});
            const button =  screen.getByRole('button', {name: /obtener cita/i})
            user.click(input);
            user.type(input, "Homer");
            user.click(button);
            await waitFor(() => {
                expect(screen.getByText(testQuotes[0].info.quote)).toBeInTheDocument();
            });
        });
        it('Should display a loading message', async () => {
            renderByDefault()
            const button =  screen.getByRole('button', {name: /obtener cita/i})
            await user.click(button);
            const loading_message = screen.queryByText(/CARGANDO.../i)
            await waitFor(() => {
                expect(loading_message).toBeInTheDocument();
            });
        });
    });
    describe('Incorrect loading quotes', () => {
        it ('Should error message when the given type is not valid', async() => {
            renderByDefault()
            user.setup()
            const input = screen.getByRole('textbox', {name: /author cita/i});
            const button =  screen.getByRole('button', {name: /obtener cita/i})
            user.click(input);
            user.type(input, "12345");
            user.click(button);
            await waitFor(()=>{
                expect(screen.getByText(/Por favor ingrese un nombre válido/i)).toBeInTheDocument()
            })
        })
    });
    describe('Delete button', () => {
        it ('Should delete quote after clicking "Borrar" button', async() => {
            renderByDefault()
            user.setup()
            const input = screen.getByRole('textbox', {name: /author cita/i});
            const button_quote =  screen.getByRole('button', {name: /obtener cita/i})
            const button_delete =  screen.getByRole('button', {  name: /borrar/i})
            user.click(input);
            user.type(input, "Homer");
            user.click(button_quote);
            user.click(button_delete);
            await waitFor(()=>{
                expect(screen.getByText(/no se encontro ninguna cita/i)).toBeInTheDocument()
            })
        })
    });
})
