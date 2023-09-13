import { screen, waitFor } from "@testing-library/react"
import user from "@testing-library/user-event";
import { render } from "../test-utils";
import Bio from "../features/bio/Bio";
import { testBio } from "./testBio";

const renderByDefault =()=>{
    render(<Bio/>);
}

describe('Bio Component', () => {
    describe('First rendering of the page', () => {
        it('Should Display a Simpson Character Button', async () => {
            renderByDefault();
            const character = testBio[0].id;
            const button = screen.getByText(character);
            expect(button).toBeInTheDocument();
        });
        it('Should Display a Simpson Character Image', async () => {
            renderByDefault();
            const image = screen.getByRole('img', {  name: /bart simpson/i})
            expect(image).toBeInTheDocument();
        });
        it('Should Display a Simpson Character Description', async () => {
            renderByDefault();
            await waitFor(() => {
                expect(screen.getByText(testBio[0].descripcion)).toBeInTheDocument();
            });
        });
        it('Should Display a Simpson Character title', async () => {
            renderByDefault();
            await waitFor(() => {
                expect(screen.getByText(testBio[0].nombre)).toBeInTheDocument();
            });
        });
    });
    describe('Correct change of Simpson character', () => {
        it('Should display a Simpson Character after clicking name a Simpson Character button', async () => {
            renderByDefault()
            user.setup()
            const button = screen.getByRole('button', {  name: /homero/i})
            user.click(button);
            await waitFor(() => {
                expect(screen.getByText(testBio[1].descripcion)).toBeInTheDocument();
            });
        });
    });
})
