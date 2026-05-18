import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

const pains = [
  'Clientes que no aparecen',
  'WhatsApps sin responder',
  'Agenda desordenada',
  'Clientes que no vuelven',
]

const features = [
  {
    icon: '📲',
    title: 'Página + QR de reservas',
    text: 'Cada negocio tiene su QR para que los clientes reserven al instante.',
  },
  {
    icon: '📅',
    title: 'Agenda conectada',
    text: 'Servicios, horarios y huecos disponibles siempre actualizados.',
  },
  {
    icon: '💬',
    title: 'Recordatorios por WhatsApp',
    text: 'Reduce ausencias con avisos automáticos antes de cada cita.',
  },
  {
    icon: '✅',
    title: 'Confirmaciones automáticas',
    text: 'Sabrás qué citas están confirmadas y cuáles necesitan revisión.',
  },
  {
    icon: '🎯',
    title: 'Reactivación de clientes',
    text: 'Recupera clientes que llevan semanas sin volver a reservar.',
  },
  {
    icon: '✨',
    title: 'Promociones inteligentes',
    text: 'Lanza campañas para rellenar huecos flojos de la semana.',
  },
  {
    icon: '🤖',
    title: 'Futura IA recepcionista',
    text: 'Una asistente que responderá, filtrará y ayudará a cerrar citas.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Analizamos tu negocio',
    text: 'Servicios, horarios, precios, duración de citas y forma actual de trabajar.',
  },
  {
    number: '02',
    title: 'Configuramos CitaFlow',
    text: 'Agenda, reservas, recordatorios, mensajes y flujo automático de clientes.',
  },
  {
    number: '03',
    title: 'Empiezas a recibir citas',
    text: 'Tus clientes reservan y reciben confirmaciones sin que persigas a nadie.',
  },
]

const appointments = [
  {
    time: '09:30',
    name: 'Cliente 09:30',
    service: 'Servicio premium',
    status: 'Confirmada por WhatsApp',
    tone: 'green',
  },
  {
    time: '11:00',
    name: 'Cliente 11:00',
    service: 'Consulta inicial',
    status: 'Recordatorio programado',
    tone: 'blue',
  },
  {
    time: '13:15',
    name: 'Cliente 13:15',
    service: 'Revisión / sesión',
    status: 'Pendiente de confirmar',
    tone: 'yellow',
  },
]


const demoServices = [
  {
    title: 'Consulta inicial',
    duration: '30 min',
    price: 'Desde 25€',
  },
  {
    title: 'Servicio premium',
    duration: '60 min',
    price: 'Desde 49€',
  },
  {
    title: 'Seguimiento / revisión',
    duration: '45 min',
    price: 'Desde 35€',
  },
]

const demoSlots = ['09:30', '10:15', '11:00', '12:30', '16:00', '17:30']

function BookingDemo() {
  const [selectedService, setSelectedService] = useState(demoServices[0])
  const [selectedSlot, setSelectedSlot] = useState(demoSlots[2])
  const [confirmed, setConfirmed] = useState(false)

  function handleBookingSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setConfirmed(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="bookingPage">
      <nav className="bookingNav">
        <a href="/" className="brand">
          <span className="brandMark">▦</span>
          <span>CitaFlow</span>
        </a>

        <a href="/" className="bookingBack">Volver a la plataforma</a>
      </nav>

      <section className="bookingHero">
        <div className="bookingBusiness">
          <span className="bookingPowered">Página de reservas creada con CitaFlow</span>
          <h1>Reserva online en Demo Negocio</h1>
          <p>
            Elige servicio, día y hora. Tu reserva quedará registrada y el negocio
            recibirá la solicitud organizada.
          </p>

          <div className="bookingBusinessMeta">
            <span>📍 Madrid</span>
            <span>🕒 Lunes a viernes</span>
            <span>💬 Confirmación automática</span>
          </div>
        </div>

        <div className="bookingCard">
          {confirmed ? (
            <div className="bookingConfirmed">
              <span>✅</span>
              <h2>Solicitud recibida</h2>
              <p>
                Tu cita para <strong>{selectedService.title}</strong> a las{' '}
                <strong>{selectedSlot}</strong> ha quedado registrada.
              </p>
              <small>
                En una versión real, el cliente recibiría confirmación por WhatsApp
                y el negocio vería la reserva en su agenda.
              </small>
              <button className="button primary" onClick={() => setConfirmed(false)}>
                Hacer otra reserva
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit}>
              <span className="formStep">1. Elige servicio</span>

              <div className="servicePicker">
                {demoServices.map((service) => (
                  <button
                    type="button"
                    className={selectedService.title === service.title ? 'serviceOption active' : 'serviceOption'}
                    key={service.title}
                    onClick={() => setSelectedService(service)}
                  >
                    <strong>{service.title}</strong>
                    <span>{service.duration} · {service.price}</span>
                  </button>
                ))}
              </div>

              <span className="formStep">2. Elige hora</span>

              <div className="slotPicker">
                {demoSlots.map((slot) => (
                  <button
                    type="button"
                    className={selectedSlot === slot ? 'slot active' : 'slot'}
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <span className="formStep">3. Tus datos</span>

              <div className="bookingInputs">
                <input name="name" placeholder="Tu nombre" required />
                <input name="phone" placeholder="WhatsApp" required />
              </div>

              <button className="button primary big" type="submit">
                Confirmar solicitud
              </button>

              <small>
                Demo visual. Próximo paso: conectar reservas reales con agenda,
                WhatsApp y panel del negocio.
              </small>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}



const automationRules = [
  {
    title: 'Recordatorio automático',
    text: 'Enviar WhatsApp antes de cada cita para reducir olvidos y ausencias.',
    enabled: true,
    detail: '15 min antes',
  },
  {
    title: 'Confirmación de asistencia',
    text: 'Pedir al cliente que confirme o cancele con una respuesta rápida.',
    enabled: true,
    detail: '2 h antes',
  },
  {
    title: 'Lista de espera inteligente',
    text: 'Si alguien cancela, avisar al siguiente cliente disponible.',
    enabled: true,
    detail: 'Automático',
  },
  {
    title: 'Reactivación de clientes',
    text: 'Contactar clientes que llevan tiempo sin reservar.',
    enabled: false,
    detail: 'Cada 45 días',
  },
]

const whatsappTemplates = [
  {
    name: 'Recordatorio de cita',
    body: 'Hola {cliente}, te recordamos tu cita hoy a las {hora}. Responde CONFIRMAR o CANCELAR.',
  },
  {
    name: 'Hueco disponible',
    body: 'Hola {cliente}, se ha liberado una cita hoy a las {hora}. ¿Quieres reservarla?',
  },
  {
    name: 'Reactivación',
    body: 'Hola {cliente}, hace tiempo que no te vemos. Tenemos huecos disponibles esta semana.',
  },
]

const panelServices = [
  'Consulta inicial · 30 min',
  'Servicio estándar · 45 min',
  'Servicio premium · 60 min',
]

function PanelDemo() {
  const [activeTemplate, setActiveTemplate] = useState(whatsappTemplates[0])
  const [rules, setRules] = useState(automationRules)

  function toggleRule(title: string) {
    setRules((current) =>
      current.map((rule) =>
        rule.title === title ? { ...rule, enabled: !rule.enabled } : rule
      )
    )
  }

  return (
    <main className="panelDemoPage">
      <aside className="panelSidebar">
        <a href="/" className="brand panelBrand">
          <span className="brandMark">▦</span>
          <span>CitaFlow</span>
        </a>

        <nav className="panelMenu">
          <a className="active" href="#agenda">Agenda</a>
          <a href="#automatismos">Automatismos</a>
          <a href="#plantillas">Plantillas</a>
          <a href="#servicios">Servicios</a>
          <a href="#qr">QR y enlace</a>
        </nav>

        <div className="panelMini">
          <span>Demo panel</span>
          <strong>Negocio con cita previa</strong>
          <p>Vista interna para configurar agenda, mensajes y automatismos.</p>
        </div>
      </aside>

      <section className="panelMain">
        <div className="panelTopbar">
          <div>
            <span className="eyebrow">Panel demo</span>
            <h1>Automatiza recordatorios, cancelaciones y huecos libres.</h1>
          </div>

          <a className="button secondary" href="/">Ver landing</a>
        </div>

        <div className="panelStats">
          <article>
            <span>Citas hoy</span>
            <strong>12</strong>
            <p>3 pendientes de confirmar</p>
          </article>

          <article>
            <span>Ausencias evitadas</span>
            <strong>8</strong>
            <p>Últimos 30 días</p>
          </article>

          <article>
            <span>Huecos recuperados</span>
            <strong>5</strong>
            <p>Por lista de espera</p>
          </article>

          <article>
            <span>Tiempo ahorrado</span>
            <strong>4h</strong>
            <p>Estimación semanal</p>
          </article>
        </div>

        <div className="panelGrid">
          <section className="panelCard large" id="automatismos">
            <div className="panelCardHeader">
              <div>
                <span>Automatismos</span>
                <h2>Reglas activas de agenda</h2>
              </div>
              <strong>{rules.filter((rule) => rule.enabled).length} activos</strong>
            </div>

            <div className="rulesList">
              {rules.map((rule) => (
                <button
                  className={rule.enabled ? 'ruleItem enabled' : 'ruleItem'}
                  key={rule.title}
                  onClick={() => toggleRule(rule.title)}
                  type="button"
                >
                  <div>
                    <strong>{rule.title}</strong>
                    <p>{rule.text}</p>
                  </div>

                  <span>{rule.enabled ? 'Activo' : 'Pausado'}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="panelCard" id="agenda">
            <div className="panelCardHeader">
              <div>
                <span>Flujo automático</span>
                <h2>Cancelación recuperada</h2>
              </div>
            </div>

            <div className="miniTimeline">
              <div>
                <span>15:45</span>
                <p>Recordatorio enviado por WhatsApp.</p>
              </div>
              <div>
                <span>15:47</span>
                <p>Cliente responde: “No puedo asistir”.</p>
              </div>
              <div>
                <span>15:48</span>
                <p>CitaFlow avisa a lista de espera.</p>
              </div>
              <div>
                <span>15:50</span>
                <p>Nuevo cliente confirma el hueco.</p>
              </div>
            </div>
          </section>

          <section className="panelCard large" id="plantillas">
            <div className="panelCardHeader">
              <div>
                <span>Plantillas WhatsApp</span>
                <h2>Mensajes editables</h2>
              </div>
            </div>

            <div className="templateLayout">
              <div className="templateTabs">
                {whatsappTemplates.map((template) => (
                  <button
                    className={activeTemplate.name === template.name ? 'active' : ''}
                    key={template.name}
                    type="button"
                    onClick={() => setActiveTemplate(template)}
                  >
                    {template.name}
                  </button>
                ))}
              </div>

              <div className="templateEditor">
                <label>
                  Nombre de plantilla
                  <input value={activeTemplate.name} readOnly />
                </label>

                <label>
                  Mensaje
                  <textarea value={activeTemplate.body} readOnly rows={5} />
                </label>

                <small>
                  Variables disponibles: {'{cliente}'}, {'{hora}'}, {'{servicio}'}, {'{negocio}'}.
                </small>
              </div>
            </div>
          </section>

          <section className="panelCard" id="servicios">
            <div className="panelCardHeader">
              <div>
                <span>Configuración</span>
                <h2>Servicios y horarios</h2>
              </div>
            </div>

            <div className="serviceList">
              {panelServices.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>

            <div className="scheduleBox">
              <strong>Lunes a viernes</strong>
              <p>09:00 - 14:00 · 16:00 - 20:00</p>
            </div>
          </section>

          <section className="panelCard qrPanel" id="qr">
            <div className="panelCardHeader">
              <div>
                <span>QR y enlace</span>
                <h2>Entrada de reservas</h2>
              </div>
            </div>

            <div className="qrPanelContent">
              <div className="smallQr">
                <i></i><i></i><i></i><i></i>
                <i></i><i></i><i></i><i></i>
                <i></i><i></i><i></i><i></i>
                <i></i><i></i><i></i><i></i>
              </div>

              <div>
                <strong>citaflow.app/r/tu-negocio</strong>
                <p>Para Instagram, WhatsApp, mostrador, tarjetas o recepción.</p>
              </div>
            </div>
          </section>

          <section className="panelCard">
            <div className="panelCardHeader">
              <div>
                <span>Próximo módulo</span>
                <h2>Asistente de agenda</h2>
              </div>
            </div>

            <p className="panelText">
              La siguiente versión podrá interpretar respuestas del cliente,
              proponer horarios y mover citas con supervisión del negocio.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}


function App() {
  if (window.location.pathname === '/panel-demo') {
    return <PanelDemo />
  }

  if (window.location.pathname.startsWith('/r/')) {
    return <BookingDemo />
  }

  function handleDemoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const salon = String(form.get('salon') || '')
    const city = String(form.get('city') || '')
    const whatsapp = String(form.get('whatsapp') || '')
    const instagram = String(form.get('instagram') || '')
    const message = String(form.get('message') || '')

    const subject = `Demo CitaFlow - ${salon || 'Nuevo negocio'}`
    const body = [
      'Hola, quiero una demo de CitaFlow.',
      '',
      `Negocio: ${salon}`,
      `Ciudad: ${city}`,
      `WhatsApp: ${whatsapp}`,
      `Instagram: ${instagram}`,
      '',
      `Mensaje: ${message}`,
    ].join('\n')

    window.location.href = `mailto:hola@citaflow.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <a className="brand" href="#" aria-label="CitaFlow inicio">
            <span className="brandMark">▦</span>
            <span>CitaFlow</span>
          </a>

          <div className="navLinks">
            <a href="#producto">Producto</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="/panel-demo">Panel demo</a>
            <a href="#demo" className="navButton">Pedir demo</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">Automatización de agenda para negocios con cita previa</span>

            <h1>Automatiza tu agenda y reduce huecos perdidos.</h1>

            <p className="heroText">
              Agenda online, recordatorios por WhatsApp y seguimiento automático
              de clientes para que tu negocio venda más sin perseguir citas.
            </p>

            <div className="heroActions">
              <a className="button primary" href="#demo">Solicitar demo gratuita</a>
              <a className="button secondary" href="/panel-demo">Ver panel demo</a>
            </div>

            <div className="trustRow">
              <span>Sin permanencia</span>
              <span>Automatismos reales</span>
              <span>Para agendas con citas</span>
            </div>
          </div>

          <div className="productVisual" aria-label="Vista previa de CitaFlow">
            <div className="glow glowOne" />
            <div className="glow glowTwo" />

            <div className="dashboardCard">
              <div className="dashboardTop">
                <div>
                  <span className="tinyLabel">Hoy</span>
                  <h2>Agenda diaria</h2>
                </div>
                <span className="liveBadge">En vivo</span>
              </div>

              <div className="appointments">
                {appointments.map((item) => (
                  <div className="appointment" key={item.time}>
                    <strong>{item.time}</strong>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.service}</p>
                      <span className={`status ${item.tone}`}>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dashboardFooter">
                <span>+ Nueva cita</span>
                <strong>WhatsApp activo</strong>
              </div>
            </div>

            <div className="miniPanel revenue">
              <span>Reservas este mes</span>
              <strong>+38%</strong>
            </div>

            <div className="miniPanel reminder">
              <span>Ausencias evitadas</span>
              <strong>24</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="problem section">
        <div className="sectionHeading">
          <span className="eyebrow">El problema</span>
          <h2>¿Cuánto tiempo pierde tu negocio contestando, confirmando y recolocando citas?</h2>
        </div>

        <div className="painGrid">
          {pains.map((pain) => (
            <div className="pain" key={pain}>{pain}</div>
          ))}
        </div>
      </section>

      <section className="trustSection section">
        <div className="trustPanel">
          <div>
            <span className="eyebrow">Para agendas con citas</span>
            <h2>Reservas online para cualquier negocio que atiende con agenda.</h2>
          </div>

          <div className="trustStats">
            <div>
              <strong>24/7</strong>
              <span>Reservas online aunque el negocio esté cerrado.</span>
            </div>
            <div>
              <strong>WhatsApp</strong>
              <span>Recordatorios y confirmaciones automáticas.</span>
            </div>
            <div>
              <strong>Más retorno</strong>
              <span>Reactivación de clientes que llevan tiempo sin reservar.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="businessTypes section">
        <div className="sectionHeading wide">
          <span className="eyebrow">Multi-sector</span>
          <h2>Un sistema de reservas para cualquier agenda profesional.</h2>
          <p>
            CitaFlow se adapta a negocios que necesitan organizar citas,
            reducir ausencias y permitir reservas online desde un QR o enlace.
          </p>
        </div>

        <div className="typeGrid">
          <span>Centros de estética</span>
          <span>Veterinarios</span>
          <span>Clínicas</span>
          <span>Fisioterapia</span>
          <span>Masajes</span>
          <span>Tatuajes</span>
          <span>Talleres</span>
          <span>Asesores</span>
        </div>
      </section>

      <section className="automationSection section">
        <div className="automationCard">
          <div className="automationCopy">
            <span className="eyebrow">El automatismo que sí duele</span>
            <h2>Si alguien cancela, CitaFlow intenta rellenar el hueco.</h2>
            <p>
              El negocio no tiene que dejar las tijeras, la consulta o el trabajo
              para coger el teléfono, revisar la libreta y llamar al siguiente.
              CitaFlow automatiza el flujo.
            </p>
          </div>

          <div className="automationTimeline">
            <article>
              <span>15:45</span>
              <strong>Recordatorio automático</strong>
              <p>El cliente recibe un WhatsApp antes de la cita.</p>
            </article>

            <article>
              <span>15:47</span>
              <strong>El cliente cancela</strong>
              <p>Responde que no puede asistir. El hueco queda libre.</p>
            </article>

            <article>
              <span>15:48</span>
              <strong>Lista de espera</strong>
              <p>CitaFlow avisa al siguiente cliente disponible.</p>
            </article>

            <article>
              <span>15:50</span>
              <strong>Hueco recuperado</strong>
              <p>Otro cliente confirma y la agenda se actualiza.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="platformSection section">
        <div className="platformCard">
          <div className="platformCopy">
            <span className="eyebrow">Nuestra plataforma</span>
            <h2>CitaFlow atiende la agenda mientras tú trabajas.</h2>
            <p>
              El objetivo no es tener otra web más. El objetivo es que CitaFlow confirme citas, recuerde reservas, detecte cancelaciones y ayude a rellenar huecos automáticamente.
            </p>
          </div>

          <div className="platformSteps">
            <article>
              <span>01</span>
              <strong>Configura tu negocio</strong>
              <p>Nombre, sector, servicios, precios, duración y horarios.</p>
            </article>

            <article>
              <span>02</span>
              <strong>Obtén tu enlace y QR</strong>
              <p>Una página de reservas dentro de CitaFlow para tus clientes.</p>
            </article>

            <article>
              <span>03</span>
              <strong>Recibe reservas online</strong>
              <p>El cliente elige servicio, día y hora sin llamadas ni mensajes eternos.</p>
            </article>

            <article>
              <span>04</span>
              <strong>Gestiona tu agenda</strong>
              <p>Reservas, clientes, confirmaciones y recordatorios desde un panel.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="qrSection section">
        <div className="qrCard">
          <div className="qrCopy">
            <span className="eyebrow">QR + agenda online</span>
            <h2>Un enlace y QR para que tus clientes entren directos a reservar.</h2>
            <p>
              Cada negocio crea su página dentro de CitaFlow con su propio QR y enlace. El cliente
              escanea, elige servicio, día y hora, y CitaFlow actualiza la agenda
              automáticamente.
            </p>

            <div className="qrBullets">
              <span>QR para mostrador, escaparate o recepción</span>
              <span>Link para Instagram y WhatsApp</span>
              <span>Agenda conectada a servicios, horarios y disponibilidad</span>
            </div>
          </div>

          <div className="qrVisual" aria-label="Vista previa del Página + QR de reservas de CitaFlow">
            <div className="qrMock realisticQR" aria-hidden="true">
              <div className="finder tl"><span></span></div>
              <div className="finder tr"><span></span></div>
              <div className="finder bl"><span></span></div>

              <i className="q p1 pink"></i>
              <i className="q p2"></i>
              <i className="q p3"></i>
              <i className="q p4 pink"></i>
              <i className="q p5"></i>
              <i className="q p6 pink"></i>
              <i className="q p7"></i>
              <i className="q p8"></i>
              <i className="q p9 pink"></i>
              <i className="q p10"></i>
              <i className="q p11 pink"></i>
              <i className="q p12"></i>
              <i className="q p13"></i>
              <i className="q p14 pink"></i>
              <i className="q p15"></i>
              <i className="q p16 pink"></i>
              <i className="q p17"></i>
              <i className="q p18"></i>
              <i className="q p19 pink"></i>
              <i className="q p20"></i>
            </div>

            <div className="bookingMini">
              <span>citaflow.app/r/tu-negocio</span>
              <strong>Reserva online</strong>
              <p>Servicio · Día · Hora · Confirmación</p>
              <em>Escanea para reservar</em>
            </div>
          </div>
        </div>
      </section>

      <section className="clientFlow section">
        <div className="sectionHeading wide">
          <span className="eyebrow">Así reserva tu cliente</span>
          <h2>De escanear el QR a tener la cita confirmada.</h2>
          <p>
            El cliente no tiene que llamar ni esperar respuesta. CitaFlow guía
            la reserva y deja la agenda actualizada automáticamente.
          </p>
        </div>

        <div className="flowGrid">
          <article className="flowCard">
            <span>01</span>
            <h3>Escanea el QR</h3>
            <p>Desde el escaparate, mostrador, Instagram, WhatsApp, recepción o tarjeta del negocio.</p>
          </article>

          <article className="flowCard">
            <span>02</span>
            <h3>Elige servicio y hora</h3>
            <p>Ve los servicios disponibles, duración, precios y huecos libres.</p>
          </article>

          <article className="flowCard">
            <span>03</span>
            <h3>Recibe confirmación</h3>
            <p>La cita queda guardada y el cliente recibe confirmación automática.</p>
          </article>
        </div>
      </section>

      <section className="features section" id="producto">
        <div className="sectionHeading wide">
          <span className="eyebrow">Todo en un sistema sencillo</span>
          <h2>Menos huecos vacíos. Más clientes recurrentes.</h2>
          <p>
            CitaFlow centraliza la agenda, automatiza mensajes y ayuda a que
            tus clientes vuelvan justo cuando toca.
          </p>
        </div>

        <div className="featureGrid">
          {features.map((feature) => (
            <article className="featureCard" key={feature.title}>
              <span className="featureIcon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase section">
        <div className="showcaseCard">
          <div>
            <span className="eyebrow">Producto visual</span>
            <h2>Una agenda clara para vender más, no para complicarte.</h2>
            <p>
              Vista diaria, clientes, servicios, estados de confirmación y
              automatizaciones preparadas para funcionar desde el primer día.
            </p>
          </div>

          <div className="phoneMockup">
            <div className="phoneHeader">
              <span>Mar, 21 mayo</span>
              <strong>8 citas</strong>
            </div>

            <div className="calendarLine filled">
              <span>09:00</span>
              <strong>Servicio reservado</strong>
            </div>
            <div className="calendarLine">
              <span>10:30</span>
              <strong>Hueco disponible</strong>
            </div>
            <div className="calendarLine filled">
              <span>12:00</span>
              <strong>Consulta completa</strong>
            </div>
            <div className="calendarLine filled">
              <span>17:30</span>
              <strong>Seguimiento / sesión premium</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="steps section" id="como-funciona">
        <div className="sectionHeading wide">
          <span className="eyebrow">Cómo funciona</span>
          <h2>Te lo dejamos montado para que empieces rápido.</h2>
        </div>

        <div className="stepGrid">
          {steps.map((step) => (
            <article className="stepCard" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="demo section" id="demo">
        <div className="demoCard">
          <div className="demoCopy">
            <span className="offerBadge">Oferta inicial</span>
            <h2>Demo gratuita para los primeros negocios.</h2>
            <p>
              Estamos seleccionando negocios para probar CitaFlow con condiciones
              especiales de lanzamiento. Déjanos tus datos y te contactamos.
            </p>
          </div>

          <form className="demoForm" onSubmit={handleDemoSubmit}>
            <div className="formGrid">
              <label>
                Nombre del negocio
                <input name="salon" type="text" placeholder="Ej. Clínica Luna, VetCare, Estética Norte" required />
              </label>

              <label>
                Ciudad
                <input name="city" type="text" placeholder="Ej. Madrid" required />
              </label>
            </div>

            <label>
              WhatsApp
              <input name="whatsapp" type="tel" placeholder="+34 600 000 000" required />
            </label>

            <label>
              Instagram o web
              <input name="instagram" type="text" placeholder="@tunegocio" />
            </label>

            <label>
              ¿Qué te gustaría automatizar?
              <textarea name="message" placeholder="Reservas, recordatorios, QR, agenda, clientes..." rows={4}></textarea>
            </label>

            <button className="button primary big" type="submit">
              Solicitar demo gratuita
            </button>

            <small>
              Sin compromiso. Te contactamos para enseñarte cómo funcionaría en tu negocio.
            </small>
          </form>
        </div>
      </section>

      <footer className="footer">
        <span>© CitaFlow.com</span>
        <span>Reservas, QR y automatización para negocios con cita previa</span>
      </footer>
    </main>
  )
}

export default App
