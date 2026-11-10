(() => {
  const L = {
    en: {
      gH: 'Join our Discord server', gT: 'Konzte is played through the Konzte Discord community. Join the server, then press “Check again”.', gJoin: 'Join Konzte Discord', gCheck: 'Check again', gStill: 'You are not on the server yet', pbH: 'This PC is blocked', pbT: 'This PC is linked to an account banned for a fair-play violation, so other accounts can’t play from it. If you think this is a mistake, contact the Konzte team in Discord.', gOut: 'Log out',
      devH: 'Devices', devT: 'Where your account is logged in. End any session you don’t recognise.', devApp: 'Konzte app', devShop: 'Store on the website', devStaff: 'Staff page', devNow: 'This device', devLast: 'active {d}', devOut: 'Log out', devOthers: 'Log out everywhere else', devOthersQ: 'End all other sessions? You stay logged in only here.', devDone: 'Sessions ended: {n}', devNone: 'No other sessions.',
      tab: 'Security', guard: 'KONZTE GUARD',
      dmH: 'Check your Discord DMs', dmT: 'The Konzte bot sent you a picture with a 5-character code. Enter it below.', dmFail: "The bot couldn't message you. In Discord allow direct messages from server members, then press “Send again”.",
      totpH: 'Google Authenticator', totpT: 'Enter the 6-digit code from Google Authenticator. Lost your phone? Enter one of your backup codes.',
      setupH: 'Staff accounts need Google Authenticator', setupT: 'Scan the QR code in Google Authenticator (or any TOTP app), then enter the 6-digit code it shows.',
      key: 'Or enter the key manually:', codePh: 'Code', go: 'Confirm', resend: 'Send again', resendIn: 'Send again in {s}s', back: 'Cancel',
      backupH: 'Your backup codes', backupT: 'Each code works once if you lose your phone. Save them somewhere safe — they are shown only now.', copyAll: 'Copy all', saved: 'I saved them',
      backupUsed: 'Backup code used. Codes left: {n}',
      sIntro: 'Extra protection for your account: after logging in with Discord, Konzte will also ask for a code.',
      sDm: 'Login code in Discord DMs', sDmH: 'On every login the bot sends a picture with a 5-character code.',
      sTotp: 'Google Authenticator', sTotpH: 'A 6-digit code from the app on your phone. Replaces the DM code.', sTotpOn: 'Enabled since {d}', setup: 'Set up', disable: 'Disable',
      sBackup: 'Backup codes', sBackupH: 'Left: {n} of 8', regen: 'New codes', staffReq: 'Required for staff — it cannot be disabled.',
      staffNeed: 'Staff tools are locked until you enable Google Authenticator.',
      askCode: 'Enter a code from Google Authenticator or a backup code', setupDone: 'Google Authenticator is enabled',
      dmOn: 'Login codes will come to your Discord DMs', dmOff: 'DM login codes are off', offDone: 'Google Authenticator is disabled',
    },
    uk: {
      gH: 'Зайди на наш Discord-сервер', gT: 'У Konzte грають через Discord-спільноту Konzte. Зайди на сервер і натисни «Перевірити ще раз».', gJoin: 'Зайти в Konzte Discord', gCheck: 'Перевірити ще раз', gStill: 'Тебе поки немає на сервері', pbH: 'Цей ПК заблоковано', pbT: 'Цей ПК пов’язаний з акаунтом, забаненим за порушення чесної гри, тому з нього не можна грати з інших акаунтів. Якщо це помилка — напиши команді Konzte в Discord.', gOut: 'Вийти',
      devH: 'Пристрої', devT: 'Де зараз відкрито твій акаунт. Заверши сесію, яку не впізнаєш.', devApp: 'Застосунок Konzte', devShop: 'Магазин на сайті', devStaff: 'Сторінка стаффу', devNow: 'Цей пристрій', devLast: 'активність {d}', devOut: 'Вийти', devOthers: 'Вийти на всіх інших', devOthersQ: 'Завершити всі інші сесії? Ти залишишся в акаунті лише тут.', devDone: 'Завершено сесій: {n}', devNone: 'Інших сесій немає.',
      tab: 'Безпека', guard: 'KONZTE GUARD',
      dmH: 'Перевір ЛС у Discord', dmT: 'Бот Konzte надіслав тобі картинку з кодом із 5 знаків. Введи його нижче.', dmFail: 'Бот не зміг тобі написати. У Discord дозволь особисті повідомлення від учасників сервера й натисни «Надіслати ще раз».',
      totpH: 'Google Authenticator', totpT: 'Введи 6-значний код із Google Authenticator. Загубив телефон — введи один із резервних кодів.',
      setupH: 'Стаффу потрібен Google Authenticator', setupT: 'Відскануй QR-код у Google Authenticator (або іншому TOTP-застосунку) і введи 6-значний код, який він покаже.',
      key: 'Або введи ключ вручну:', codePh: 'Код', go: 'Підтвердити', resend: 'Надіслати ще раз', resendIn: 'Ще раз через {s} с', back: 'Скасувати',
      backupH: 'Твої резервні коди', backupT: 'Кожен код діє один раз, якщо загубиш телефон. Збережи їх у надійному місці — показуємо лише зараз.', copyAll: 'Копіювати всі', saved: 'Я зберіг',
      backupUsed: 'Використано резервний код. Лишилось: {n}',
      sIntro: 'Додатковий захист акаунта: після входу через Discord Konzte попросить ще й код.',
      sDm: 'Код входу в ЛС Discord', sDmH: 'При кожному вході бот надсилає картинку з кодом із 5 знаків.',
      sTotp: 'Google Authenticator', sTotpH: '6-значний код із застосунку на телефоні. Замінює код у ЛС.', sTotpOn: 'Увімкнено з {d}', setup: 'Підключити', disable: 'Вимкнути',
      sBackup: 'Резервні коди', sBackupH: 'Лишилось: {n} з 8', regen: 'Нові коди', staffReq: 'Обов’язково для стаффу — вимкнути не можна.',
      staffNeed: 'Інструменти стаффу закриті, доки не підключиш Google Authenticator.',
      askCode: 'Введи код із Google Authenticator або резервний код', setupDone: 'Google Authenticator підключено',
      dmOn: 'Коди входу приходитимуть у ЛС Discord', dmOff: 'Коди в ЛС вимкнено', offDone: 'Google Authenticator вимкнено',
    },
    ru: {
      gH: 'Зайди на наш Discord-сервер', gT: 'В Konzte играют через Discord-сообщество Konzte. Зайди на сервер и нажми «Проверить ещё раз».', gJoin: 'Зайти в Konzte Discord', gCheck: 'Проверить ещё раз', gStill: 'Тебя пока нет на сервере', pbH: 'Этот ПК заблокирован', pbT: 'Этот ПК связан с аккаунтом, забаненным за нарушение честной игры, поэтому с него нельзя играть с других аккаунтов. Если это ошибка — напиши команде Konzte в Discord.', gOut: 'Выйти',
      devH: 'Устройства', devT: 'Где сейчас открыт твой аккаунт. Заверши сессию, которую не узнаёшь.', devApp: 'Приложение Konzte', devShop: 'Магазин на сайте', devStaff: 'Страница стаффа', devNow: 'Это устройство', devLast: 'активность {d}', devOut: 'Выйти', devOthers: 'Выйти на всех остальных', devOthersQ: 'Завершить все остальные сессии? Ты останешься в аккаунте только здесь.', devDone: 'Завершено сессий: {n}', devNone: 'Других сессий нет.',
      tab: 'Безопасность', guard: 'KONZTE GUARD',
      dmH: 'Проверь ЛС в Discord', dmT: 'Бот Konzte прислал тебе картинку с кодом из 5 символов. Введи его ниже.', dmFail: 'Бот не смог тебе написать. В Discord разреши личные сообщения от участников сервера и нажми «Отправить ещё раз».',
      totpH: 'Google Authenticator', totpT: 'Введи 6-значный код из Google Authenticator. Потерял телефон — введи один из резервных кодов.',
      setupH: 'Стаффу нужен Google Authenticator', setupT: 'Отсканируй QR-код в Google Authenticator (или другом TOTP-приложении) и введи 6-значный код, который он покажет.',
      key: 'Или введи ключ вручную:', codePh: 'Код', go: 'Подтвердить', resend: 'Отправить ещё раз', resendIn: 'Ещё раз через {s} с', back: 'Отмена',
      backupH: 'Твои резервные коды', backupT: 'Каждый код действует один раз, если потеряешь телефон. Сохрани их в надёжном месте — показываем только сейчас.', copyAll: 'Копировать все', saved: 'Я сохранил',
      backupUsed: 'Использован резервный код. Осталось: {n}',
      sIntro: 'Дополнительная защита аккаунта: после входа через Discord Konzte попросит ещё и код.',
      sDm: 'Код входа в ЛС Discord', sDmH: 'При каждом входе бот присылает картинку с кодом из 5 символов.',
      sTotp: 'Google Authenticator', sTotpH: '6-значный код из приложения на телефоне. Заменяет код в ЛС.', sTotpOn: 'Включён с {d}', setup: 'Подключить', disable: 'Отключить',
      sBackup: 'Резервные коды', sBackupH: 'Осталось: {n} из 8', regen: 'Новые коды', staffReq: 'Обязательно для стаффа — отключить нельзя.',
      staffNeed: 'Инструменты стаффа закрыты, пока не подключишь Google Authenticator.',
      askCode: 'Введи код из Google Authenticator или резервный код', setupDone: 'Google Authenticator подключён',
      dmOn: 'Коды входа будут приходить в ЛС Discord', dmOff: 'Коды в ЛС отключены', offDone: 'Google Authenticator отключён',
    },
    es: {
      gH: 'Únete a nuestro servidor de Discord', gT: 'Konzte se juega a través de la comunidad de Discord de Konzte. Únete y pulsa «Comprobar de nuevo».', gJoin: 'Unirse a Konzte Discord', gCheck: 'Comprobar de nuevo', gStill: 'Aún no estás en el servidor', pbH: 'Este PC está bloqueado', pbT: 'Este PC está vinculado a una cuenta baneada por juego sucio, así que no se puede jugar desde él con otras cuentas. Si crees que es un error, escribe al equipo de Konzte en Discord.', gOut: 'Cerrar sesión',
      devH: 'Dispositivos', devT: 'Dónde está abierta tu cuenta. Cierra cualquier sesión que no reconozcas.', devApp: 'App Konzte', devShop: 'Tienda web', devStaff: 'Página de staff', devNow: 'Este dispositivo', devLast: 'activo {d}', devOut: 'Cerrar sesión', devOthers: 'Cerrar las demás sesiones', devOthersQ: '¿Cerrar todas las demás sesiones? Solo seguirás conectado aquí.', devDone: 'Sesiones cerradas: {n}', devNone: 'No hay otras sesiones.',
      tab: 'Seguridad', dmH: 'Revisa tus MD de Discord', dmT: 'El bot de Konzte te envió una imagen con un código de 5 caracteres. Escríbelo abajo.', dmFail: 'El bot no pudo escribirte. En Discord permite mensajes directos de miembros del servidor y pulsa «Enviar de nuevo».',
      totpT: 'Escribe el código de 6 dígitos de Google Authenticator. ¿Perdiste el teléfono? Usa un código de respaldo.', setupH: 'El staff necesita Google Authenticator', setupT: 'Escanea el QR en Google Authenticator (u otra app TOTP) y escribe el código de 6 dígitos.',
      key: 'O escribe la clave a mano:', codePh: 'Código', go: 'Confirmar', resend: 'Enviar de nuevo', resendIn: 'De nuevo en {s} s', back: 'Cancelar',
      backupH: 'Tus códigos de respaldo', backupT: 'Cada código sirve una vez si pierdes el teléfono. Guárdalos en un lugar seguro: solo se muestran ahora.', copyAll: 'Copiar todos', saved: 'Ya los guardé', backupUsed: 'Código de respaldo usado. Quedan: {n}',
      sIntro: 'Protección extra: tras entrar con Discord, Konzte también pedirá un código.', sDm: 'Código de acceso por MD de Discord', sDmH: 'En cada inicio de sesión el bot envía una imagen con un código de 5 caracteres.',
      sTotpH: 'Código de 6 dígitos de la app del teléfono. Sustituye al código por MD.', sTotpOn: 'Activado desde {d}', setup: 'Configurar', disable: 'Desactivar', sBackup: 'Códigos de respaldo', sBackupH: 'Quedan: {n} de 8', regen: 'Nuevos códigos', staffReq: 'Obligatorio para el staff: no se puede desactivar.',
      staffNeed: 'Las herramientas de staff están bloqueadas hasta que actives Google Authenticator.', askCode: 'Escribe un código de Google Authenticator o de respaldo', setupDone: 'Google Authenticator activado', dmOn: 'Los códigos llegarán a tus MD de Discord', dmOff: 'Códigos por MD desactivados', offDone: 'Google Authenticator desactivado',
    },
    pt: {
      gH: 'Entre no nosso servidor do Discord', gT: 'O Konzte é jogado pela comunidade do Konzte no Discord. Entre no servidor e toque em “Verificar de novo”.', gJoin: 'Entrar no Konzte Discord', gCheck: 'Verificar de novo', gStill: 'Você ainda não está no servidor', pbH: 'Este PC está bloqueado', pbT: 'Este PC está ligado a uma conta banida por jogo injusto, então não é possível jogar nele com outras contas. Se for um engano, fale com a equipe do Konzte no Discord.', gOut: 'Sair',
      devH: 'Dispositivos', devT: 'Onde sua conta está conectada. Encerre qualquer sessão que você não reconheça.', devApp: 'App Konzte', devShop: 'Loja no site', devStaff: 'Página da staff', devNow: 'Este dispositivo', devLast: 'ativo {d}', devOut: 'Sair', devOthers: 'Sair de todos os outros', devOthersQ: 'Encerrar todas as outras sessões? Você continuará conectado só aqui.', devDone: 'Sessões encerradas: {n}', devNone: 'Nenhuma outra sessão.',
      tab: 'Segurança', dmH: 'Veja suas DMs no Discord', dmT: 'O bot do Konzte enviou uma imagem com um código de 5 caracteres. Digite abaixo.', dmFail: 'O bot não conseguiu te mandar mensagem. No Discord, permita mensagens diretas de membros do servidor e toque em “Enviar de novo”.',
      totpT: 'Digite o código de 6 dígitos do Google Authenticator. Perdeu o celular? Use um código de backup.', setupH: 'Staff precisa do Google Authenticator', setupT: 'Escaneie o QR no Google Authenticator (ou outro app TOTP) e digite o código de 6 dígitos.',
      key: 'Ou digite a chave manualmente:', codePh: 'Código', go: 'Confirmar', resend: 'Enviar de novo', resendIn: 'De novo em {s} s', back: 'Cancelar',
      backupH: 'Seus códigos de backup', backupT: 'Cada código funciona uma vez se você perder o celular. Guarde em local seguro — só aparecem agora.', copyAll: 'Copiar todos', saved: 'Já salvei', backupUsed: 'Código de backup usado. Restam: {n}',
      sIntro: 'Proteção extra: depois de entrar com o Discord, o Konzte também pedirá um código.', sDm: 'Código de login na DM do Discord', sDmH: 'A cada login o bot envia uma imagem com um código de 5 caracteres.',
      sTotpH: 'Código de 6 dígitos do app no celular. Substitui o código por DM.', sTotpOn: 'Ativado desde {d}', setup: 'Configurar', disable: 'Desativar', sBackup: 'Códigos de backup', sBackupH: 'Restam: {n} de 8', regen: 'Novos códigos', staffReq: 'Obrigatório para staff — não pode ser desativado.',
      staffNeed: 'Ferramentas de staff bloqueadas até você ativar o Google Authenticator.', askCode: 'Digite um código do Google Authenticator ou de backup', setupDone: 'Google Authenticator ativado', dmOn: 'Os códigos chegarão na sua DM do Discord', dmOff: 'Códigos por DM desativados', offDone: 'Google Authenticator desativado',
    },
    de: {
      gH: 'Tritt unserem Discord-Server bei', gT: 'Konzte wird über die Konzte-Discord-Community gespielt. Tritt dem Server bei und klicke „Erneut prüfen“.', gJoin: 'Konzte Discord beitreten', gCheck: 'Erneut prüfen', gStill: 'Du bist noch nicht auf dem Server', pbH: 'Dieser PC ist gesperrt', pbT: 'Dieser PC ist mit einem Konto verknüpft, das wegen Unfairness gesperrt wurde, daher kann von ihm nicht mit anderen Konten gespielt werden. Falls das ein Fehler ist, schreib dem Konzte-Team auf Discord.', gOut: 'Abmelden',
      devH: 'Geräte', devT: 'Wo dein Konto angemeldet ist. Beende jede Sitzung, die du nicht kennst.', devApp: 'Konzte-App', devShop: 'Shop auf der Website', devStaff: 'Staff-Seite', devNow: 'Dieses Gerät', devLast: 'aktiv {d}', devOut: 'Abmelden', devOthers: 'Überall sonst abmelden', devOthersQ: 'Alle anderen Sitzungen beenden? Du bleibst nur hier angemeldet.', devDone: 'Beendete Sitzungen: {n}', devNone: 'Keine anderen Sitzungen.',
      tab: 'Sicherheit', dmH: 'Sieh in deine Discord-DMs', dmT: 'Der Konzte-Bot hat dir ein Bild mit einem 5-stelligen Code geschickt. Gib ihn unten ein.', dmFail: 'Der Bot konnte dir nicht schreiben. Erlaube in Discord Direktnachrichten von Servermitgliedern und klicke „Erneut senden“.',
      totpT: 'Gib den 6-stelligen Code aus Google Authenticator ein. Handy verloren? Nutze einen Backup-Code.', setupH: 'Staff braucht Google Authenticator', setupT: 'Scanne den QR-Code in Google Authenticator (oder einer anderen TOTP-App) und gib den 6-stelligen Code ein.',
      key: 'Oder gib den Schlüssel manuell ein:', codePh: 'Code', go: 'Bestätigen', resend: 'Erneut senden', resendIn: 'Erneut in {s} s', back: 'Abbrechen',
      backupH: 'Deine Backup-Codes', backupT: 'Jeder Code funktioniert einmal, falls du dein Handy verlierst. Bewahre sie sicher auf — sie werden nur jetzt angezeigt.', copyAll: 'Alle kopieren', saved: 'Gespeichert', backupUsed: 'Backup-Code verwendet. Übrig: {n}',
      sIntro: 'Zusätzlicher Schutz: Nach dem Discord-Login fragt Konzte zusätzlich nach einem Code.', sDm: 'Login-Code per Discord-DM', sDmH: 'Bei jedem Login schickt der Bot ein Bild mit einem 5-stelligen Code.',
      sTotpH: '6-stelliger Code aus der App auf deinem Handy. Ersetzt den DM-Code.', sTotpOn: 'Aktiv seit {d}', setup: 'Einrichten', disable: 'Deaktivieren', sBackup: 'Backup-Codes', sBackupH: 'Übrig: {n} von 8', regen: 'Neue Codes', staffReq: 'Für Staff Pflicht — kann nicht deaktiviert werden.',
      staffNeed: 'Staff-Tools sind gesperrt, bis du Google Authenticator aktivierst.', askCode: 'Code aus Google Authenticator oder Backup-Code eingeben', setupDone: 'Google Authenticator aktiviert', dmOn: 'Login-Codes kommen per Discord-DM', dmOff: 'DM-Codes deaktiviert', offDone: 'Google Authenticator deaktiviert',
    },
    fr: {
      gH: 'Rejoins notre serveur Discord', gT: 'Konzte se joue via la communauté Discord de Konzte. Rejoins le serveur puis clique sur « Vérifier à nouveau ».', gJoin: 'Rejoindre Konzte Discord', gCheck: 'Vérifier à nouveau', gStill: 'Tu n’es pas encore sur le serveur', pbH: 'Ce PC est bloqué', pbT: 'Ce PC est lié à un compte banni pour triche, on ne peut donc pas y jouer avec d’autres comptes. Si c’est une erreur, contacte l’équipe Konzte sur Discord.', gOut: 'Déconnexion',
      devH: 'Appareils', devT: 'Où ton compte est connecté. Termine toute session que tu ne reconnais pas.', devApp: 'App Konzte', devShop: 'Boutique du site', devStaff: 'Page staff', devNow: 'Cet appareil', devLast: 'actif {d}', devOut: 'Déconnecter', devOthers: 'Déconnecter partout ailleurs', devOthersQ: 'Terminer toutes les autres sessions ? Tu resteras connecté uniquement ici.', devDone: 'Sessions terminées : {n}', devNone: 'Aucune autre session.',
      tab: 'Sécurité', dmH: 'Regarde tes MP Discord', dmT: 'Le bot Konzte t’a envoyé une image avec un code de 5 caractères. Saisis-le ci-dessous.', dmFail: 'Le bot n’a pas pu t’écrire. Dans Discord, autorise les messages privés des membres du serveur puis clique sur « Renvoyer ».',
      totpT: 'Saisis le code à 6 chiffres de Google Authenticator. Téléphone perdu ? Utilise un code de secours.', setupH: 'Le staff doit utiliser Google Authenticator', setupT: 'Scanne le QR dans Google Authenticator (ou une autre app TOTP) puis saisis le code à 6 chiffres.',
      key: 'Ou saisis la clé à la main :', codePh: 'Code', go: 'Confirmer', resend: 'Renvoyer', resendIn: 'Renvoyer dans {s} s', back: 'Annuler',
      backupH: 'Tes codes de secours', backupT: 'Chaque code fonctionne une fois si tu perds ton téléphone. Garde-les en lieu sûr — ils ne s’affichent que maintenant.', copyAll: 'Tout copier', saved: 'C’est noté', backupUsed: 'Code de secours utilisé. Restants : {n}',
      sIntro: 'Protection en plus : après la connexion Discord, Konzte demandera aussi un code.', sDm: 'Code de connexion en MP Discord', sDmH: 'À chaque connexion le bot envoie une image avec un code de 5 caractères.',
      sTotpH: 'Code à 6 chiffres de l’app sur ton téléphone. Remplace le code en MP.', sTotpOn: 'Activé depuis le {d}', setup: 'Configurer', disable: 'Désactiver', sBackup: 'Codes de secours', sBackupH: 'Restants : {n} sur 8', regen: 'Nouveaux codes', staffReq: 'Obligatoire pour le staff — impossible à désactiver.',
      staffNeed: 'Les outils staff sont bloqués tant que Google Authenticator n’est pas activé.', askCode: 'Saisis un code Google Authenticator ou un code de secours', setupDone: 'Google Authenticator activé', dmOn: 'Les codes arriveront en MP Discord', dmOff: 'Codes en MP désactivés', offDone: 'Google Authenticator désactivé',
    },
    pl: {
      gH: 'Dołącz do naszego serwera Discord', gT: 'W Konzte gra się przez społeczność Konzte na Discordzie. Dołącz do serwera i kliknij „Sprawdź ponownie”.', gJoin: 'Dołącz do Konzte Discord', gCheck: 'Sprawdź ponownie', gStill: 'Nie ma cię jeszcze na serwerze', pbH: 'Ten komputer jest zablokowany', pbT: 'Ten komputer jest powiązany z kontem zbanowanym za nieuczciwą grę, więc nie można z niego grać na innych kontach. Jeśli to pomyłka, napisz do zespołu Konzte na Discordzie.', gOut: 'Wyloguj',
      devH: 'Urządzenia', devT: 'Gdzie jest zalogowane twoje konto. Zakończ każdą sesję, której nie rozpoznajesz.', devApp: 'Aplikacja Konzte', devShop: 'Sklep na stronie', devStaff: 'Strona staffu', devNow: 'To urządzenie', devLast: 'aktywny {d}', devOut: 'Wyloguj', devOthers: 'Wyloguj wszędzie indziej', devOthersQ: 'Zakończyć wszystkie inne sesje? Zostaniesz zalogowany tylko tutaj.', devDone: 'Zakończone sesje: {n}', devNone: 'Brak innych sesji.',
      tab: 'Bezpieczeństwo', dmH: 'Sprawdź DM na Discordzie', dmT: 'Bot Konzte wysłał ci obrazek z 5-znakowym kodem. Wpisz go poniżej.', dmFail: 'Bot nie mógł do ciebie napisać. Na Discordzie zezwól na wiadomości od członków serwera i kliknij „Wyślij ponownie”.',
      totpT: 'Wpisz 6-cyfrowy kod z Google Authenticator. Zgubiłeś telefon? Użyj kodu zapasowego.', setupH: 'Staff potrzebuje Google Authenticator', setupT: 'Zeskanuj kod QR w Google Authenticator (lub innej aplikacji TOTP) i wpisz 6-cyfrowy kod.',
      key: 'Albo wpisz klucz ręcznie:', codePh: 'Kod', go: 'Potwierdź', resend: 'Wyślij ponownie', resendIn: 'Ponownie za {s} s', back: 'Anuluj',
      backupH: 'Twoje kody zapasowe', backupT: 'Każdy kod działa raz, jeśli zgubisz telefon. Zapisz je w bezpiecznym miejscu — pokazujemy je tylko teraz.', copyAll: 'Kopiuj wszystkie', saved: 'Zapisałem', backupUsed: 'Użyto kodu zapasowego. Zostało: {n}',
      sIntro: 'Dodatkowa ochrona: po zalogowaniu przez Discord Konzte poprosi też o kod.', sDm: 'Kod logowania w DM Discord', sDmH: 'Przy każdym logowaniu bot wysyła obrazek z 5-znakowym kodem.',
      sTotpH: '6-cyfrowy kod z aplikacji na telefonie. Zastępuje kod w DM.', sTotpOn: 'Włączony od {d}', setup: 'Skonfiguruj', disable: 'Wyłącz', sBackup: 'Kody zapasowe', sBackupH: 'Zostało: {n} z 8', regen: 'Nowe kody', staffReq: 'Obowiązkowe dla staffu — nie można wyłączyć.',
      staffNeed: 'Narzędzia staffu są zablokowane, dopóki nie włączysz Google Authenticator.', askCode: 'Wpisz kod z Google Authenticator lub kod zapasowy', setupDone: 'Google Authenticator włączony', dmOn: 'Kody logowania przyjdą w DM Discord', dmOff: 'Kody w DM wyłączone', offDone: 'Google Authenticator wyłączony',
    },
    tr: {
      gH: 'Discord sunucumuza katıl', gT: 'Konzte, Konzte Discord topluluğu üzerinden oynanır. Sunucuya katıl ve “Tekrar kontrol et”e bas.', gJoin: 'Konzte Discord’a katıl', gCheck: 'Tekrar kontrol et', gStill: 'Henüz sunucuda değilsin', pbH: 'Bu bilgisayar engellendi', pbT: 'Bu bilgisayar, adil oyun ihlali nedeniyle banlanan bir hesapla bağlantılı; bu yüzden başka hesaplarla oynanamaz. Hata olduğunu düşünüyorsan Discord’da Konzte ekibine yaz.', gOut: 'Çıkış yap',
      devH: 'Cihazlar', devT: 'Hesabının açık olduğu yerler. Tanımadığın oturumu kapat.', devApp: 'Konzte uygulaması', devShop: 'Web mağazası', devStaff: 'Yetkili sayfası', devNow: 'Bu cihaz', devLast: 'aktif {d}', devOut: 'Çıkış yap', devOthers: 'Diğer her yerden çık', devOthersQ: 'Diğer tüm oturumlar kapatılsın mı? Yalnızca burada açık kalacaksın.', devDone: 'Kapatılan oturumlar: {n}', devNone: 'Başka oturum yok.',
      tab: 'Güvenlik', dmH: 'Discord DM’lerine bak', dmT: 'Konzte botu sana 5 karakterlik kod içeren bir resim gönderdi. Aşağıya yaz.', dmFail: 'Bot sana mesaj atamadı. Discord’da sunucu üyelerinden DM’ye izin ver ve “Tekrar gönder”e bas.',
      totpT: 'Google Authenticator’daki 6 haneli kodu yaz. Telefonunu mu kaybettin? Yedek kodlardan birini kullan.', setupH: 'Yetkililer için Google Authenticator zorunlu', setupT: 'QR kodu Google Authenticator’da (veya başka bir TOTP uygulamasında) tara ve 6 haneli kodu yaz.',
      key: 'Ya da anahtarı elle gir:', codePh: 'Kod', go: 'Onayla', resend: 'Tekrar gönder', resendIn: '{s} sn sonra tekrar', back: 'İptal',
      backupH: 'Yedek kodların', backupT: 'Telefonunu kaybedersen her kod bir kez çalışır. Güvenli bir yere kaydet — yalnızca şimdi gösteriliyor.', copyAll: 'Hepsini kopyala', saved: 'Kaydettim', backupUsed: 'Yedek kod kullanıldı. Kalan: {n}',
      sIntro: 'Ek koruma: Discord ile girişten sonra Konzte bir kod da isteyecek.', sDm: 'Discord DM ile giriş kodu', sDmH: 'Her girişte bot 5 karakterlik kod içeren bir resim gönderir.',
      sTotpH: 'Telefonundaki uygulamadan 6 haneli kod. DM kodunun yerine geçer.', sTotpOn: '{d} tarihinden beri açık', setup: 'Kur', disable: 'Kapat', sBackup: 'Yedek kodlar', sBackupH: 'Kalan: {n} / 8', regen: 'Yeni kodlar', staffReq: 'Yetkililer için zorunlu — kapatılamaz.',
      staffNeed: 'Google Authenticator’ı açana kadar yetkili araçları kilitli.', askCode: 'Google Authenticator kodu veya yedek kod gir', setupDone: 'Google Authenticator açıldı', dmOn: 'Giriş kodları Discord DM’ine gelecek', dmOff: 'DM kodları kapalı', offDone: 'Google Authenticator kapatıldı',
    },
  };
  const tg = (k, v = {}) => String(L[LANG]?.[k] ?? L.en[k] ?? k).replace(/\{(\w+)\}/g, (_, x) => v[x] ?? '');

  const ERR = {
    uk: { 'Wrong code': 'Неправильний код', 'The code has expired — send a new one': 'Код застарів — надішли новий', 'Wait a minute before sending a new code': 'Зачекай хвилину перед новим кодом', 'Too many codes sent. Start the login again': 'Забагато кодів. Почни вхід заново', 'Login cancelled: too many wrong codes': 'Вхід скасовано: забагато неправильних кодів', 'Too many attempts. Try again in an hour': 'Забагато спроб. Спробуй за годину', "The bot can't message you. Allow direct messages from server members in Discord and try again": 'Бот не може тобі написати. Дозволь у Discord особисті повідомлення від учасників сервера й спробуй ще раз', 'Staff accounts must keep Authenticator enabled': 'Стафф не може вимкнути Authenticator', 'Enable Google Authenticator (Settings → Security) to use staff tools': 'Підключи Google Authenticator (Налаштування → Безпека), щоб користуватися інструментами стаффу', 'Start the setup again': 'Почни підключення заново' },
    ru: { 'Wrong code': 'Неверный код', 'The code has expired — send a new one': 'Код устарел — отправь новый', 'Wait a minute before sending a new code': 'Подожди минуту перед новым кодом', 'Too many codes sent. Start the login again': 'Слишком много кодов. Начни вход заново', 'Login cancelled: too many wrong codes': 'Вход отменён: слишком много неверных кодов', 'Too many attempts. Try again in an hour': 'Слишком много попыток. Попробуй через час', "The bot can't message you. Allow direct messages from server members in Discord and try again": 'Бот не может тебе написать. Разреши в Discord личные сообщения от участников сервера и попробуй снова', 'Staff accounts must keep Authenticator enabled': 'Стафф не может отключить Authenticator', 'Enable Google Authenticator (Settings → Security) to use staff tools': 'Подключи Google Authenticator (Настройки → Безопасность), чтобы пользоваться инструментами стаффа', 'Start the setup again': 'Начни подключение заново' },
  };
  try { for (const [l, m] of Object.entries(ERR)) Object.assign(SERVER_ERRORS[l] ||= {}, m); } catch {}

  const SHIELD = '<svg viewBox="0 0 24 24"><path d="M12 2.5l8.5 3.2v5.8c0 5-3.4 8.7-8.5 10.1-5.1-1.4-8.5-5.1-8.5-10.1V5.7z"/><path d="M8.3 12l2.6 2.6 4.9-5.2"/></svg>';
  const head = () => `<div class="kg-head"><i>${SHIELD}</i><b>KONZTE <span>GUARD</span></b>${!document.documentElement.classList.contains('web') ? `<em class="kg-ver">${esc(S.appInfo?.guard || '1.x')}</em>` : ''}</div>`;
  const qrBlock = s => `<div class="kg-qr">${s.qr}</div><div class="kg-key"><span class="mute">${tg('key')}</span><code>${esc(s.secret)}</code></div>`;

  function showBackup(codes) {
    return new Promise(done => {
      modal(`<div class="card accent kg-modal">${head()}<h3>${tg('backupH')}</h3><p class="mute">${tg('backupT')}</p>
        <div class="kg-codes">${codes.map(c => `<code>${esc(c)}</code>`).join('')}</div>
        <div class="row" style="justify-content:center;gap:10px;margin-top:14px"><button class="btn ghost" id="kg-copy">${tg('copyAll')}</button><button class="btn" id="kg-ok">${tg('saved')}</button></div></div>`, box => {
        box.querySelector('.overlay').onclick = null;
        box.querySelector('#kg-copy').onclick = () => { navigator.clipboard.writeText(codes.join('\n')); toast(t('copied', { t: '' })); };
        box.querySelector('#kg-ok').onclick = () => { closeModal(); done(); };
      });
    });
  }

  async function login(state, info) {
    $('#nav').hidden = true;
    let resendAt = Date.now() + (info.resendIn || 0), dmOk = info.dmOk !== false, timer = null;
    return new Promise((resolve, reject) => {
      const draw = () => {
        const m = info.mode;
        const h = m === 'dm' ? tg('dmH') : m === 'totp' ? tg('totpH') : tg('setupH');
        const p = m === 'dm' ? tg('dmT') : m === 'totp' ? tg('totpT') : tg('setupT');
        render(`<div class="center lobbybg"><form class="card accent login kg-login" id="kg-form">${head()}
          <h2>${h}</h2>${info.nick ? `<div class="mute kg-nick">${esc(info.nick)}</div>` : ''}<p class="mute">${p}</p>
          ${m === 'dm' && !dmOk ? `<p class="kg-warn">${tg('dmFail')}</p>` : ''}
          ${m === 'setup' ? qrBlock(info.setup) : ''}
          <input id="kg-code" class="kg-input ${m === 'dm' ? 'dm' : ''}" placeholder="${tg('codePh')}" maxlength="${m === 'dm' ? 5 : 9}" autocomplete="one-time-code" spellcheck="false" autofocus>
          <button class="btn big" id="kg-go">${tg('go')}</button>
          ${m === 'dm' ? `<button type="button" class="btn ghost" id="kg-resend"></button>` : ''}
          <button type="button" class="btn ghost sm kg-back" id="kg-back">${tg('back')}</button></form></div>`);
        $('#kg-code')?.focus();
        $('#kg-form').onsubmit = e => { e.preventDefault(); submit(); };
        $('#kg-back').onclick = () => { clearInterval(timer); reject(new Error(tg('back'))); showLogin(); };
        if (m === 'dm') { $('#kg-resend').onclick = run(resend); tick(); }
      };
      const tick = () => {
        const b = $('#kg-resend'); if (!b) return;
        const s = Math.ceil((resendAt - Date.now()) / 1000);
        b.disabled = s > 0; b.textContent = s > 0 ? tg('resendIn', { s }) : tg('resend');
      };
      const resend = async () => {
        const r = await post('/auth/2fa/resend', { state });
        dmOk = r.dmOk; resendAt = Date.now() + (r.resendIn || 60e3); draw();
      };
      const submit = run(async () => {
        const code = ($('#kg-code').value || '').trim();
        if (!code) return;
        $('#kg-go').disabled = true;
        try {
          const r = await post('/auth/2fa', { state, code });
          clearInterval(timer);
          if (r.backup) { toast(tg('setupDone')); await showBackup(r.backup); }
          if (r.backupLeft != null) toast(tg('backupUsed', { n: r.backupLeft }));
          resolve(r.token);
        } catch (e) {
          if (/Login cancelled|Login expired/.test(e.raw || '')) { clearInterval(timer); showLogin(); reject(e); return; }
          $('#kg-go').disabled = false; $('#kg-code').value = ''; $('#kg-code').focus();
          throw e;
        }
      });
      timer = setInterval(tick, 1000);
      draw();
    });
  }
  async function post(path, body) {
    const r = await fetch(S.server + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(r => r.json()).catch(() => { throw new Error(t('serverDown')); });
    if (r.error) { const e = new Error(tErr(r.error)); e.raw = r.error; throw e; }
    return r;
  }

  const st = { open: false, data: null, sess: null };
  const ago = ts => {
    const m = Math.max(0, Math.round((Date.now() - ts) / 6e4)), rtf = new Intl.RelativeTimeFormat(LOCALE[LANG] || 'en', { numeric: 'auto' });
    return m < 60 ? rtf.format(-m, 'minute') : m < 1440 ? rtf.format(-Math.round(m / 60), 'hour') : rtf.format(-Math.round(m / 1440), 'day');
  };
  function devHtml(list) {
    if (!list) return `<div class="mute">${t('loading')}</div>`;
    const kind = k => tg(k === 'shop' ? 'devShop' : k === 'staff' ? 'devStaff' : 'devApp');
    const others = list.filter(x => !x.current).length;
    return `<div class="kg-devs">${list.map(x => `<div class="kg-dev ${x.current ? 'cur' : ''}"><div class="grow"><b>${esc(x.dev || kind(x.kind))}</b>${x.current ? `<span class="kg-now">${tg('devNow')}</span>` : ''}
      <span class="mute">${esc(kind(x.kind))}${x.ip ? ' · ' + esc(x.ip) : ''} · ${tg('devLast', { d: esc(ago(x.last)) })}</span></div>
      ${x.current ? '' : `<button class="btn ghost sm" data-kg-out="${esc(x.id)}">${tg('devOut')}</button>`}</div>`).join('')}</div>
      ${others ? `<button class="btn red sm" id="kg-others" style="margin-top:10px">${tg('devOthers')}</button>` : `<p class="mute" style="margin:8px 0 0">${tg('devNone')}</p>`}`;
  }
  const askCode = () => new Promise(done => {
    modal(`<form class="card accent kg-modal" id="kg-ask">${head()}<p class="mute">${tg('askCode')}</p>
      <input id="kg-ask-code" class="kg-input" maxlength="9" autocomplete="one-time-code" spellcheck="false">
      <div class="row" style="justify-content:center;gap:10px;margin-top:12px"><button type="button" class="btn ghost" data-close>${tg('back')}</button><button class="btn">${tg('go')}</button></div></form>`, box => {
      const f = box.querySelector('#kg-ask'), i = box.querySelector('#kg-ask-code'); i.focus();
      box.querySelectorAll('[data-close]').forEach(b => b.onclick = () => { closeModal(); done(null); });
      f.onsubmit = e => { e.preventDefault(); const v = i.value.trim(); closeModal(); done(v || null); };
    });
  });
  function setupModal(s) {
    modal(`<form class="card accent kg-modal" id="kg-setup">${head()}<h3>${tg('sTotp')}</h3><p class="mute">${tg('setupT')}</p>${qrBlock(s)}
      <input id="kg-setup-code" class="kg-input" maxlength="6" placeholder="000000" autocomplete="one-time-code">
      <div class="row" style="justify-content:center;gap:10px;margin-top:12px"><button type="button" class="btn ghost" data-close>${tg('back')}</button><button class="btn" id="kg-setup-go">${tg('go')}</button></div></form>`, box => {
      const i = box.querySelector('#kg-setup-code'); i.focus();
      box.querySelector('#kg-setup').onsubmit = run(async e => {
        e.preventDefault();
        const r = await api('/api/2fa/totp/enable', { code: i.value.trim() });
        st.data = r; closeModal(); sfx('ok'); toast(tg('setupDone'));
        await showBackup(r.backup); renderSettings();
      });
    });
  }
  function panelHtml(d) {
    const row = (label, hint, ctl) => `<div class="srow"><div><b>${label}</b>${hint ? `<span>${hint}</span>` : ''}</div><div>${ctl}</div></div>`;
    return `<div class="kg-sec">${head()}<p class="mute">${tg('sIntro')}</p>
      ${d.staffRequired && !d.totp ? `<p class="kg-warn">${tg('staffNeed')}</p>` : ''}
      ${row(tg('sTotp'), d.totp ? tg('sTotpOn', { d: fmtDate(d.totpAt) }) + (d.staffRequired ? ' · ' + tg('staffReq') : '') : tg('sTotpH'),
        d.totp ? (d.staffRequired ? '<span class="kg-on">✓</span>' : `<button class="btn red sm" id="kg-off">${tg('disable')}</button>`) : `<button class="btn sm" id="kg-setup">${tg('setup')}</button>`)}
      ${d.totp ? row(tg('sBackup'), tg('sBackupH', { n: d.backupLeft }), `<button class="btn ghost sm" id="kg-regen">${tg('regen')}</button>`) : ''}
      ${row(tg('sDm'), tg('sDmH'), `<button class="switch ${d.dm ? 'on' : ''}" id="kg-dm"></button>`)}
      <h4 class="kg-h4">${tg('devH')}</h4><p class="mute" style="margin:0 0 10px">${tg('devT')}</p>${devHtml(st.sess)}</div>`;
  }
  function bind(panel) {
    panel.querySelectorAll('[data-kg-out]').forEach(b => b.onclick = run(async () => { st.sess = await api('/api/sessions/revoke', { id: b.dataset.kgOut }); toast(tg('devDone', { n: 1 })); renderSettings(); }));
    panel.querySelector('#kg-others')?.addEventListener('click', run(async () => {
      if (!confirm(tg('devOthersQ'))) return;
      const n = st.sess.filter(x => !x.current).length; st.sess = await api('/api/sessions/others', {}); toast(tg('devDone', { n })); renderSettings();
    }));
    panel.querySelector('#kg-dm')?.addEventListener('click', run(async () => {
      const on = !st.data.dm; st.data = await api('/api/2fa/dm', { on }); sfx(on ? 'toggle_on' : 'toggle_off'); toast(tg(on ? 'dmOn' : 'dmOff')); renderSettings();
    }));
    panel.querySelector('#kg-setup')?.addEventListener('click', run(async () => setupModal(await api('/api/2fa/totp/begin', {}))));
    panel.querySelector('#kg-off')?.addEventListener('click', run(async () => {
      const code = await askCode(); if (!code) return;
      st.data = await api('/api/2fa/totp/disable', { code }); toast(tg('offDone')); renderSettings();
    }));
    panel.querySelector('#kg-regen')?.addEventListener('click', run(async () => {
      const code = await askCode(); if (!code) return;
      const r = await api('/api/2fa/backup', { code }); st.data = r; await showBackup(r.backup); renderSettings();
    }));
  }
  const _rs = renderSettings;
  renderSettings = async function () {
    const r = await _rs.apply(this, arguments);
    if (S.page !== 'settings') return r;
    const nav = document.querySelector('#view .setnav'), panel = document.querySelector('#view .setpanel');
    if (!nav || !panel || nav.querySelector('[data-kgt]')) return r;
    const btn = document.createElement('button');
    btn.dataset.kgt = '1';
    btn.innerHTML = `<i class="sic">${SHIELD}</i>${tg('tab')}`;
    const acc = nav.querySelector('[data-stt="account"]');
    acc ? acc.after(btn) : nav.append(btn);
    nav.querySelectorAll('button:not([data-kgt])').forEach(b => b.addEventListener('click', () => { st.open = false; }, true));
    btn.onclick = () => { st.open = true; st.sess = null; window.KZPartnerClose?.(); renderSettings(); };
    if (st.open) {
      nav.querySelectorAll('button').forEach(b => b.classList.remove('on')); btn.classList.add('on');
      if (!st.sess) api('/api/sessions').then(l => { st.sess = l; if (st.open && S.page === 'settings') renderSettings(); }).catch(() => {});
      if (!st.data) { panel.innerHTML = `<div class="mute">${t('loading')}</div>`; api('/api/2fa').then(d => { st.data = d; if (st.open && S.page === 'settings') renderSettings(); }).catch(e => toast(e.message, true)); }
      else { panel.innerHTML = panelHtml(st.data); bind(panel); }
    }
    return r;
  };
  const _go = go;
  go = function (page) { if (page !== 'settings') st.open = false; return _go.apply(this, arguments); };

  window.KZGate = {
    show(j) {
      $('#nav').hidden = true;
      if (S.ws) { S.ws.onclose = null; S.ws.close(); S.ws = null; }
      const pc = !!j.pcban;
      render(`<div class="center lobbybg"><div class="card accent login kg-login">${head()}
        <h2>${tg(pc ? 'pbH' : 'gH')}</h2><p class="mute">${tg(pc ? 'pbT' : 'gT')}</p>
        ${pc ? '' : `<button class="btn big discord" id="kg-join">${tg('gJoin')}</button><button class="btn" id="kg-recheck">${tg('gCheck')}</button>`}
        <button type="button" class="btn ghost sm kg-back" id="kg-out">${tg('gOut')}</button></div></div>`);
      $('#kg-join')?.addEventListener('click', () => K.open(j.invite || 'https://konzte.online/discord'));
      $('#kg-recheck')?.addEventListener('click', run(async () => {
        try { S.me = await api('/api/me'); } catch { toast(tg('gStill'), true); return; }
        sfx('login'); afterLogin();
      }));
      $('#kg-out').onclick = () => logout();
    },
  };
  window.KZ2fa = {
    login,
    open() { st.open = true; st.data = null; st.sess = null; if (S.page === 'settings') renderSettings(); else go('settings'); },
  };
})();
