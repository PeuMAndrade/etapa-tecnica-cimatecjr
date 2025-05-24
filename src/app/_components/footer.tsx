import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-300">
      <div className="flex flex-col md:flex-row justify-evenly gap-6">
        <div>
          <h2 className="font-semibold text-lg">Localização</h2>
          <p>
            Rua Exemplo, nº 123 – Bairro Imaginário <br />
            Salvador – BA, CEP 00000-000 <br />
            Aberto todos os dias, das 7h às 22h
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Contato</h2>
          <p>
            WhatsApp: (71) 99999-9999 <br />
            E-mail: contato@clubeficticio.com.br <br />
            Fale com a gente e reserve seu horário!
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Mídias Sociais</h2>
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2">
              <Instagram className="w-6 h-6 text-pink-500" />
              <span>ArenaFutebol</span>
            </div>
            <div className="flex items-center gap-2">
              <Facebook className="w-6 h-6 text-blue-700" />
              <span>ArenaFutebol</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 border-t border-gray-500" />

      <div>
        <h2 className="font-semibold text-lg">Nota Técnica</h2>
        <p>
          Este site foi desenvolvido com fins acadêmicos como parte do processo
          seletivo técnico para a <strong>CIMATEC Jr.</strong>O conteúdo aqui
          apresentado é fictício e voltado exclusivamente para demonstração de
          habilidades em desenvolvimento web.
        </p>
      </div>
    </footer>
  );
}
