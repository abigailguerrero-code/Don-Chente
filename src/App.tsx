import { motion, AnimatePresence } from "motion/react";
import { Coffee, Wind, Heart, Utensils, Calculator, MessageSquare, MapPin, Sparkles, ChevronLeft, ChevronRight, Pencil } from "lucide-react";
import { useState } from "react";

const storySections = [
  {
    id: "intro",
    title: "CONOCE LA HISTORIA DE DON CHENTE",
    subtitle: "Banco de Alimentos 2026 - Prepa UPAEP Santiago",
    content: "Si te ha llegado este sitio web es porque sólo tú puedes ayudar a Don Chente. Él es una de las personas del Banco de Alimentos a la que tú puedes cambiarle la vida hoy mismo con tu solidaridad.",
    bg: "bg-school-red",
    text: "text-white",
    image: "https://lh3.googleusercontent.com/d/1BBZCeJIu6sEyCtahXNwXTXtQ4vRWqVrI",
    icon: <Heart className="w-12 h-12" />
  },
  {
    id: "cafe",
    title: "El despertar con puro café",
    content: "La alarma de Don Chente no es un sonido, es el frío que se cuela por la ventana de su cuartito. Son las 4:30 AM, y la ciudad todavía duerme. Lo primero que hace es ir a la cocina. Prende la estufa, pero solo para calentarse las manos un momento. Busca en el estante de arriba: nada. Ni una tortilla fría, ni un rastro de frijol en la olla de barro.\n\nSe prepara un café de olla muy aguado, con la última cucharada de azúcar que le quedaba. \"Para que el cuerpo aguante\", se dice a sí mismo, apretándose el cinturón un agujero más. Sabe que hoy será un día largo.",
    icon: <Coffee className="w-12 h-12 text-school-red" />,
    style: "notebook"
  },
  {
    id: "viento",
    title: "La rutina del \"viento\"",
    content: "Don Chente fue cargador en la Central de Abasto durante 40 años. Sus rodillas ya no son las de antes, crujen como madera seca, pero necesita dinero para pagar la renta. Se pone sus botas de trabajo; las mismas que tienen una suela con un agujero tan grande que cada piedra de la calle se siente como un pinchazo directo al hueso. Camina 50 cuadras hasta el mercado más cercano, porque no tiene para el pasaje.\n\nAl llegar, espera a que algún camión de legumbres necesite ayuda para descargar. Si tiene suerte, carga costales de papas o cajas de jitomate de 40 kilos sobre su espalda encorvada. Por tres horas de trabajo, le pagan unos cuantos pesos que apenas le alcanzan para pagar la luz y el agua.",
    icon: <Wind className="w-12 h-12 text-school-red" />,
    style: "notebook"
  },
  {
    id: "silencio",
    title: "El sufrimiento silencioso",
    content: "A mediodía, el hambre ya no es un ruido en la panza, es un mareo que le nubla la vista. Sente el olor a tacos de suadero y a garnachas de los puestos de la calle y tiene que cerrar los ojos para no llorar de la pura desesperación. Se aguanta la pena y pide un taco de pura sal en un puesto, \"nomás para no desmayarse\".\n\nRegresa a su casa derrotado. Lo más difícil no es el dolor de espalda, es la vergüenza. Don Chente se encierra temprano para que los vecinos no vean que no tiene qué cocinar y que su mesa está vacía. Se acuesta antes de que oscurezca para \"dormir el hambre\", pero el ruido de su propio estómago no lo deja descansar.",
    icon: <Heart className="w-12 h-12 text-slate-400" />,
    style: "notebook"
  },
  {
    id: "cambio",
    title: "Campaña UPAEP Santiago",
    content: "Aquí es donde entras tú. Tu ayuda puede cambiar la vida de esta persona. Imagina que Don Chente recibe esa caja que tú ayudaste a llenar con tu donativo de 3kg de arroz o frijol negro.",
    icon: <Sparkles className="w-12 h-12 text-school-yellow" />,
    bg: "bg-school-red",
    text: "text-white"
  },
  {
    id: "mates",
    title: "Matemáticas de esperanza",
    content: "Esos 3 kg de arroz y 3 de frijol negro se convierten en más de 40 platos generosos de moros y cristianos.\n\nMañana, Don Chente no tendrá que caminar esas 50 cuadras con el estómago vacío. Ya no tendrá que \"dormir el hambre\".",
    icon: <Calculator className="w-12 h-12 text-school-red" />,
    style: "notebook"
  },
  {
    id: "dignidad",
    title: "¡Dona y Cambia Vidas!",
    content: "Cuando tú donas 3kg de arroz o frijol, le estás regalando a Don Chente una noche de paz y la fuerza para seguir adelante.\n\nINSTRUCCIONES DE DONACIÓN:\n• Cantidad: 3kg de Arroz o Frijol.\n• Entrega: Acércate con tu TUTOR.\n• Campaña: Prepa UPAEP Santiago 2026.\n\nNo es solo comida, es dignidad y esperanza.",
    icon: <Utensils className="w-12 h-12 text-school-red" />,
    style: "notebook"
  }
];

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const next = () => {
    if (currentSection < storySections.length - 1) {
      setCurrentSection(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const section = storySections[currentSection];

  return (
    <div className="min-h-screen bg-paper flex flex-col items-center justify-center p-4 md:p-8">
      {/* Header / Escolares Details */}
      <div className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50">
        <div className="bg-school-yellow px-4 py-1 border-2 border-black rotate-[-2deg] flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span className="font-display font-bold text-sm text-school-red">UPAEP Santiago 2026</span>
        </div>
        <div className="font-hand text-xl text-school-red font-bold">
          {currentSection + 1} / {storySections.length + 1}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={section.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className={`max-w-2xl w-full rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden ${section.bg || 'bg-white'}`}
        >
          {section.style === "notebook" && (
            <div className="h-6 bg-school-red flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-white opacity-40" />
              <div className="w-3 h-3 rounded-full bg-white opacity-40" />
              <div className="w-3 h-3 rounded-full bg-white opacity-40" />
            </div>
          )}
          
          <div className={`p-8 ${section.text || 'text-slate-900'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-paper border-2 border-black rounded-lg">
                {section.icon}
              </div>
              <div>
                <h1 className="text-3xl font-black uppercase tracking-tighter leading-none">
                  {section.title}
                </h1>
                {section.subtitle && (
                  <p className="font-hand text-xl mt-1 opacity-80">{section.subtitle}</p>
                )}
              </div>
            </div>

            <div className={`space-y-4 whitespace-pre-wrap ${section.style === "notebook" ? 'notebook-page red-margin pl-6' : ''}`}>
              {section.image && (
                <div className="mb-6 rounded-lg overflow-hidden border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white min-h-[200px] flex items-center justify-center">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://picsum.photos/seed/solidarity/800/600";
                    }}
                  />
                </div>
              )}
              <p className="text-lg leading-relaxed">
                {section.content}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Navigation */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {currentSection > 0 && (
          <button
            onClick={prev}
            className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-y-[-4px] hover:translate-y-0 transition-all font-display font-bold uppercase active:bg-slate-100"
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>
        )}
        
        {currentSection < storySections.length - 1 ? (
          <button
            onClick={next}
            className="flex items-center gap-2 px-6 py-3 bg-school-yellow border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-y-[-4px] hover:translate-y-0 transition-all font-display font-bold uppercase"
          >
            Siguiente
            <ChevronRight className="w-5 h-5" />
          </button>
        ) : !sent && (
          <div className="flex items-center gap-2 text-school-red animate-pulse">
            <Pencil className="w-6 h-6" />
            <span className="font-hand text-xl font-bold">¡Escribe tu mensaje abajo!</span>
          </div>
        )}
      </div>

      <AnimatePresence>
        {currentSection === storySections.length - 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 max-w-2xl w-full bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#FACC15]"
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-school-red" />
              <h2 className="text-2xl font-black uppercase">Para pensar...</h2>
            </div>
            <p className="text-lg mb-6 font-hand text-xl">
              Si pudieras poner un mensaje dentro de un paquete de tortillas para Don Chente, ¿qué le escribirías para que sepa que no está solo?
            </p>
            
            {!sent ? (
              <div className="space-y-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tu mensaje aquí..."
                  className="w-full p-4 border-2 border-black font-hand text-xl bg-paper min-h-[120px] focus:outline-none focus:ring-2 focus:ring-school-yellow"
                />
                <button
                  onClick={() => setSent(true)}
                  className="w-full px-6 py-4 bg-school-red text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-y-[-4px] hover:translate-y-0 transition-all font-display font-bold uppercase"
                >
                  Enviar mensaje de esperanza
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-school-yellow/20 p-6 border-2 border-dashed border-school-red text-center"
              >
                <Sparkles className="w-10 h-10 mx-auto mb-2 text-school-red" />
                <p className="text-xl font-hand font-bold text-school-red">
                  ¡Gracias! Tu mensaje ha sido guardado. La solidaridad es la mejor herramienta contra el hambre.
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decor */}
      <div className="fixed -bottom-10 -right-10 w-64 h-64 bg-school-yellow rounded-full opacity-10 blur-3xl pointer-events-none" />
      <div className="fixed -top-10 -left-10 w-64 h-64 bg-school-red rounded-full opacity-10 blur-3xl pointer-events-none" />
    </div>
  );
}
