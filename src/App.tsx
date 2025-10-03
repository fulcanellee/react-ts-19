import {Accordion} from '@alfalab/core-components-accordion'
import {ActionButton} from '@alfalab/core-components-action-button'
import {DiamondsMIcon} from '@alfalab/icons-glyph/DiamondsMIcon';
import {DiamondsXxlIcon} from '@alfalab/icons-glyph/DiamondsXxlIcon';
import {StarMIcon} from '@alfalab/icons-glyph/StarMIcon';
import {SfFaceIdXxlIcon} from '@alfalab/icons-glyph/SfFaceIdXxlIcon';
import {MobilePhoneBubbleLineMIcon} from '@alfalab/icons-glyph/MobilePhoneBubbleLineMIcon';
import {CarMIcon} from '@alfalab/icons-glyph/CarMIcon';
import {FlowerMMIcon} from '@alfalab/icons-glyph/FlowerMMIcon';
import {BanknoteMIcon} from '@alfalab/icons-glyph/BanknoteMIcon';
import {ContainerMIcon} from '@alfalab/icons-glyph/ContainerMIcon';
import {Alert} from '@alfalab/core-components-alert';
import {Amount} from '@alfalab/core-components-amount';
import {AmountInput} from '@alfalab/core-components-amount-input';
import {Attach} from '@alfalab/core-components-attach';
import {Backdrop} from '@alfalab/core-components-backdrop';
import {Button} from '@alfalab/core-components-button';
import {useState, useCallback, useRef} from "react";
import {Badge} from '@alfalab/core-components-badge';
import {BankCard} from '@alfalab/core-components-bank-card';
import {BaseModal} from '@alfalab/core-components-base-modal';
import {BottomSheet} from '@alfalab/core-components-bottom-sheet';
import {CalendarDesktop} from '@alfalab/core-components-calendar/desktop';
import {CalendarInputDesktop} from '@alfalab/core-components-calendar-input/desktop';
import {CalendarRange} from '@alfalab/core-components-calendar-range';
import {CalendarWithSkeleton} from '@alfalab/core-components-calendar-with-skeleton';
import {CardImage} from '@alfalab/core-components-card-image';
import {CDNIcon} from '@alfalab/core-components-cdn-icon';
import {Chart} from '@alfalab/core-components-chart';
import {Checkbox} from '@alfalab/core-components-checkbox';
import {CheckboxGroupDesktop} from '@alfalab/core-components-checkbox-group/desktop';
import {CircularProgressBar} from '@alfalab/core-components-circular-progress-bar';
import {CodeInput} from '@alfalab/core-components-code-input';
import {Collapse} from '@alfalab/core-components-collapse';
import {Spacer} from "./spacer.tsx";
import {Comment} from '@alfalab/core-components-comment';
import {Gap} from '@alfalab/core-components-gap';
import {Confirmation, useConfirmation} from '@alfalab/core-components-confirmation';
import {ConfirmationV1} from '@alfalab/core-components-confirmation-v1';
import {CustomButton} from '@alfalab/core-components-custom-button';
import {CustomPickerButtonDesktop} from '@alfalab/core-components-custom-picker-button/desktop';
import {DateInput} from '@alfalab/core-components-date-input';
import {DateRangeInput} from '@alfalab/core-components-date-range-input';
import {DateTimeInput} from '@alfalab/core-components-date-time-input';
import {Drawer} from '@alfalab/core-components-drawer';
import {Dropzone} from '@alfalab/core-components-dropzone';
import {FileUploadItem} from '@alfalab/core-components-file-upload-item';
import {FileUploadItemV1} from '@alfalab/core-components-file-upload-item-v1';
import {SelectDesktop} from '@alfalab/core-components-select/desktop';
import {BaseOption} from '@alfalab/core-components-select/components/base-option';
import {FilterTag} from '@alfalab/core-components-filter-tag';
import {FormControl} from '@alfalab/core-components-form-control';
import {Gallery} from '@alfalab/core-components-gallery';
import {GenericWrapper} from '@alfalab/core-components-generic-wrapper';
import {Grid} from '@alfalab/core-components-grid';
import {HatchingProgressBar} from '@alfalab/core-components-hatching-progress-bar';
import {IconButton} from '@alfalab/core-components-icon-button';
import {Circle} from '@alfalab/core-components-icon-view/circle';
import {Indicator} from '@alfalab/core-components-indicator';
import {Input} from '@alfalab/core-components-input';
import {InputAutocomplete} from '@alfalab/core-components-input-autocomplete';
import {InternationalPhoneInput} from '@alfalab/core-components-international-phone-input';
import {IntlPhoneInput} from '@alfalab/core-components-intl-phone-input';
import {KeyboardFocusable} from '@alfalab/core-components-keyboard-focusable';
import {Link} from '@alfalab/core-components-link';
import {Typography} from '@alfalab/core-components-typography';
import {List} from '@alfalab/core-components-list';
import {ListHeader} from '@alfalab/core-components-list-header';
import {Loader} from '@alfalab/core-components-loader';
import {Markdown} from '@alfalab/core-components-markdown';
import {MaskedInput} from '@alfalab/core-components-masked-input';
import {ModalDesktop} from '@alfalab/core-components-modal/desktop';
import {Mq} from '@alfalab/core-components-mq';
import {NavigationBar} from '@alfalab/core-components-navigation-bar';
import {NavigationBarPrivate} from '@alfalab/core-components-navigation-bar-private';
import {Notification} from '@alfalab/core-components-notification';
import {NotificationManager} from '@alfalab/core-components-notification-manager';
import {NumberInput} from '@alfalab/core-components-number-input';
import {PageIndicatorDynamic} from '@alfalab/core-components-page-indicator';
import {Pagination} from '@alfalab/core-components-pagination';
import {PassCode, KeyPadButton} from '@alfalab/core-components-pass-code';
import {PassCodeV1} from '@alfalab/core-components-pass-code-v1';
import {PasswordInput} from '@alfalab/core-components-password-input';
import {PatternLock} from '@alfalab/core-components-pattern-lock';
import {PatternLockV1} from '@alfalab/core-components-pattern-lock-v1';
import {PhoneInput} from '@alfalab/core-components-phone-input';
import {PickerButtonDesktop} from '@alfalab/core-components-picker-button/desktop';
import {Plate} from '@alfalab/core-components-plate';
import {StatusBadge} from '@alfalab/core-components-status-badge';
import {Popover} from '@alfalab/core-components-popover';
import {PopupSheet} from '@alfalab/core-components-popup-sheet';
import {Portal} from '@alfalab/core-components-portal';
import {ProductCover} from '@alfalab/core-components-product-cover';
import {ProgressBar} from '@alfalab/core-components-progress-bar';
import {PureCell} from '@alfalab/core-components-pure-cell';
import {Radio} from '@alfalab/core-components-radio';
import {RadioGroupDesktop} from '@alfalab/core-components-radio-group/desktop';
import {Scrollbar} from '@alfalab/core-components-scrollbar';
import {SegmentedControl, Segment} from '@alfalab/core-components-segmented-control';
import {SelectWithTags} from '@alfalab/core-components-select-with-tags';
import {SidePanelDesktop} from '@alfalab/core-components-side-panel/desktop';
import {Skeleton} from '@alfalab/core-components-skeleton';
import {Slider} from '@alfalab/core-components-slider';
import {SliderInput} from '@alfalab/core-components-slider-input';
import {SortableList} from '@alfalab/core-components-sortable-list';
import {Space} from '@alfalab/core-components-space';
import {Spinner} from '@alfalab/core-components-spinner';
import {Stack} from '@alfalab/core-components-stack';
import {Status} from '@alfalab/core-components-status';
import {Tooltip} from '@alfalab/core-components-tooltip';
import {SteppedProgressBar} from '@alfalab/core-components-stepped-progress-bar';
import {Steps} from '@alfalab/core-components-steps';
import {Switch} from '@alfalab/core-components-switch';
import {SystemMessage} from '@alfalab/core-components-system-message';
import {TabBar} from '@alfalab/core-components-tab-bar';
import {Table} from '@alfalab/core-components-table';
import {TabsDesktop, Tab} from '@alfalab/core-components-tabs/desktop';
import {Tag} from '@alfalab/core-components-tag';
import {Text} from '@alfalab/core-components-text';
import {Textarea} from '@alfalab/core-components-textarea';
import {TimeInput} from '@alfalab/core-components-time-input';
import {Toast} from '@alfalab/core-components-toast';
import {ToastPlate} from '@alfalab/core-components-toast-plate';
import {Underlay} from '@alfalab/core-components-underlay';
import {UniversalDateInput} from '@alfalab/core-components-universal-date-input';
import {UniversalModalDesktop} from '@alfalab/core-components-universal-modal/desktop';
import {withSuffix} from '@alfalab/core-components-with-suffix';

function App() {
    const [backdropOpen, setBackdropOpen] = useState(false);
    const [baseModalOpen, setBaseModalOpen] = useState(false);
    const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
    const [calendarWithSkeletonVisible, setCalendarWithSkeletonVisible] = useState(true);
    const [checkboxChecked, setCheckboxChecked] = useState(true);
    const [checkboxGroupValue, setCheckboxGroupValue] = useState({one: false, two: false, three: false});
    const [valueConfirmationV1, setValueConfirmationV1] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openGallery, setOpenGallery] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openUniversalModal, setOpenUniversalModal] = useState(false);
    const [openStackModal, setOpenStackModal] = useState(false);
    const [openSidePanel, setOpenSidePanel] = useState(false);
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [notificationCount, setNotificationCount] = useState(1);
    const [notifications, setNotifications] = useState([]);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);
    const [popupSheetOpen, setPopupSheetOpen] = useState(false);
    const [portalShow, setPortalShow] = useState(false);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const removeNotification = useCallback((id) => {
        setNotifications((actualNotifications) =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            actualNotifications.filter((notification) => notification.props.id !== id),
        );
    }, []);


    const {
        confirmationState,
        confirmationScreen,
        confirmationBlockSmsRetry,
        setConfirmationState,
        setConfirmationScreen,
    } = useConfirmation();

    const getColorBadge = (num: number) => {
        if (num % 3 === 1) {
            return 'positive';
        } else if (num % 3 === 2) {
            return 'attention';
        } else if (num % 3 === 0) {
            return 'negative';
        }
    };

    const addNotification = () => {
        const newNotification = (
            <Notification
                badge={getColorBadge(notificationCount)}
                title={`Уведомление #${notificationCount}`}
                autoCloseDelay={3000}
                id={notificationCount.toString()}
                key={notificationCount.toString()}
                zIndex={1000 + notificationCount}
            >
                Описание уведомления
            </Notification>
        );

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setNotifications([...notifications, newNotification]);
        setNotificationCount((val) => val + 1);
    };

    const handleButtonRef = useRef<HTMLButtonElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const portalContainerRef = useRef<any>(null);

    const getChildStyle = (bgColor: string) => ({
        height: 80,
        textAlign: 'center',
        lineHeight: '80px',
        fontSize: 40,
        fontWeight: 700,
        color: 'var(--color-light-text-tertiary)',
        background: `var(${bgColor})`,
    });

    const SuffixInput = withSuffix(Input);

    return (
        <>
            <h1>Test Page for core-components on React 19.1.1</h1>

            <h2>Accordion</h2>
            <Accordion
                header='Зачем нужен аккордeон?'
                className='accordion-container'
            >
                Используется для создания интерактивных списков,
                которые можно разворачивать и сворачивать для
                отображения дополнительной информации.
            </Accordion>
            <Spacer/>

            <h2>Action Button</h2>
            <ActionButton icon={<DiamondsMIcon/>} view='primary'>
                Primary
            </ActionButton>
            <Spacer/>

            <h2>Alert (Deprecated)</h2>
            <Alert>Вам одобрено. Согласитесь на предложение</Alert>
            <Spacer/>

            <h2>Amount</h2>
            <Amount
                value={123456700}
                minority={100}
                currency='RUB'
                bold='none'
                view='withZeroMinorPart'
                rightAddons={<DiamondsMIcon/>}
            />
            <Spacer/>

            <h2>Amount Input</h2>
            <AmountInput
                defaultValue={1234567}
                placeholder='Введите сумму'
                labelView='inner'
                label='Сумма'
                minority={100}
                bold={false}
                block={true}
                size={56}
            />
            <Spacer/>

            <h2>Attach</h2>
            <Attach size={56}/>
            <Spacer/>

            <h2>Backdrop</h2>
            <Button
                onClick={() => setBackdropOpen(!backdropOpen)}
            >
                {backdropOpen ? 'Закрыть Backdrop' : 'Показать Backdrop'}
            </Button>
            <Backdrop open={backdropOpen} onClick={() => setBackdropOpen(false)}/>
            <Spacer/>

            <h2>Badge (Deprecated)</h2>
            <Badge view='count'/>
            <Badge view='count' content={1}/>
            <Badge height={24} view='count' content={1}/>
            <Badge height={24} view='count' content={99}/>
            <Badge height={24} view='count' content={100}/>
            <Spacer/>

            <h2>BankCard</h2>
            <BankCard value={'2201382000000013'}/>
            <Spacer/>

            <h2>BaseModal</h2>
            <Button onClick={() => setBaseModalOpen(!baseModalOpen)}>
                Показать BaseModal
            </Button>
            <BaseModal open={baseModalOpen} onClose={() => setBaseModalOpen(false)}>
                <div style={{padding: '100px'}}>BaseModal</div>
            </BaseModal>
            <Spacer/>

            <h2>BottomSheet</h2>
            <Button type='button' onClick={() => setBottomSheetOpen(true)} block={true}>
                Показать анатомию
            </Button>
            <BottomSheet
                trimTitle={false}
                open={bottomSheetOpen}
                onClose={() => setBottomSheetOpen(false)}
                showSwipeMarker={false}
            >
                <div style={{height: '680px'}}/>
            </BottomSheet>
            <Spacer/>

            <h2>Calendar</h2>
            <div style={{width: 344}}>
                <CalendarDesktop
                    responsive={true}
                    selectorView={'month-only'}
                    showCurrentYearSelector={true}
                />
            </div>
            <Spacer/>

            <h2>CalendarInput (Deprecated)</h2>
            <div style={{width: 344}}>
                <CalendarInputDesktop
                    label='Укажите дату'
                    defaultMonth={1}
                    calendarProps={{
                        selectorView: 'month-only',
                    }}
                />
            </div>
            <Spacer/>

            <h2>CalendarRange</h2>
            <CalendarRange
                valueFrom={''}
                valueTo={''}
                minDate={1639069200000}
                maxDate={1654794000000}
                calendarPosition={'static'}
            />
            <Spacer/>

            <h2>CalendarWithSkeleton</h2>
            <div style={{width: 344}}>
                <CalendarWithSkeleton calendarVisible={calendarWithSkeletonVisible}/>
            </div>
            <Button type='button' onClick={() => setCalendarWithSkeletonVisible(!calendarWithSkeletonVisible)}>
                Показать анатомию
            </Button>
            <Spacer/>

            <h2>CardImage</h2>
            <CardImage
                cardId='EG'
                width={380}
                baseUrl='https://online.alfabank.ru/cards-images/cards/'
                className='some name'
                id='some id'
                dataTestId='test id'
            />
            <Spacer/>

            <h2>CDNIcon</h2>
            <CDNIcon
                color='var(--color-light-neutral-translucent-1300)'
                name='glyph_diamonds_xxl'
            />
            <CDNIcon
                color='var(--color-light-neutral-700)'
                name='glyph_diamonds_m'
            />
            <CDNIcon
                color='var(--color-light-neutral-500)'
                name='glyph_diamonds_s'
            />
            <Spacer/>

            <h2>Chart</h2>
            <div style={{width: '600px', height: '400px'}}>
                <Chart
                    id='bar-chart'
                    composeChart={{
                        barCategoryGap: '5%',
                    }}
                    xAxis={{
                        axisLine: false,
                        type: 'category',
                        interval: 'preserveStartEnd',
                        tickLine: false,
                        tickMargin: 10,
                        dataKey: 'label',
                    }}
                    yAxis={{
                        axisLine: false,
                        type: 'number',
                        hide: true,
                    }}
                    labels={[
                        'Long label',
                        'Label1',
                        'Label2',
                        'Label3',
                        'Label4',
                        'Label5',
                        'Label6',
                        'Label7',
                    ]}
                    series={[{
                        chart: 'bar',
                        radius: {top: 10, bottom: 10,},
                        labelList: {
                            ofsset: 10,
                            formatter: (value: number) => `${value} шт.`
                        },
                        properties: {
                            name: 'приход',
                            dataKey: 'cm',
                            formatter: (decimal: number) => `${decimal * 1000}`,
                            fill: '#2fc26e',
                        },
                        data: [
                            {
                                label: 'Long label',
                                value: 5000,
                            },
                            {
                                label: 'Label1',
                                value: 650,
                            },
                            {
                                label: 'Label2',
                                value: 3522,
                            },
                            {
                                label: 'Label3',
                                value: 0,
                            },
                            {
                                label: 'Label4',
                                value: 2000,
                            },
                            {
                                label: 'Label5',
                                value: 1043,
                            },
                            {
                                label: 'Label6',
                                value: 600,
                            },
                            {
                                label: 'Label7',
                                value: 1,
                            },
                        ],
                        icon: 'circleLine',
                        offset: 0,
                        gradient: {
                            gid: '',
                            points: []
                        }
                    }]}
                />
            </div>
            <Spacer/>

            <h2>Checkbox</h2>
            <Checkbox
                block={true}
                size={24}
                label='Согласен с условиями'
                hint='И внимательно их прочитал'
                checked={checkboxChecked}
                onChange={() => setCheckboxChecked(!checkboxChecked)}
            />
            <Spacer/>

            <h2>CheckboxGroup</h2>
            <CheckboxGroupDesktop
                label='Планеты расположенные между Землёй и Солнцем'
                direction='horizontal'
                hint='Выберите несколько планет'
                onChange={(_, payload) => {
                    setCheckboxGroupValue({...checkboxGroupValue, ...(payload?.name && {[payload.name]: payload.checked})});
                }}
            >
                <Checkbox label='Меркурий' name='one' checked={checkboxGroupValue.one} size={24}/>
                <Checkbox label='Венера' name='two' checked={checkboxGroupValue.two} size={24}/>
                <Checkbox label='Нептун' name='three' checked={checkboxGroupValue.three} size={24}/>
            </CheckboxGroupDesktop>
            <Spacer/>

            <h2>CircularProgressBar</h2>
            <div style={{display: 'flex'}}>
                <CircularProgressBar value={25} size={144} contentColor='primary'/>
                <CircularProgressBar value={25} size={128} contentColor='primary'/>
                <CircularProgressBar value={25} size={80} contentColor='primary'/>
                <CircularProgressBar value={25} size={64} contentColor='primary'/>
                <CircularProgressBar value={25} size={48} contentColor='primary'/>
                <CircularProgressBar value={25} size={24} contentColor='primary'/>
            </div>
            <Spacer/>

            <h2>CodeInput</h2>
            <CodeInput fields={5}/>
            <Spacer/>

            <h2>Collapse</h2>
            <Collapse collapsedLabel='Подробнее' expandedLabel='Скрыть'>
                Требования 115-ФЗ и связанных с ним документов Банка России часто меняются,
                предприниматели не всегда успевают за ними следить.
                Последствия нарушений «антиотмывочного» законодательства всегда неприятны:
                приходится остановить бизнес-процессы и доказать банку законность операций.
                Специалисты «Альфа-банка» собрали понятные рекомендации, как сэкономить время на объяснения и
                предотвратить блокировки.
            </Collapse>
            <Spacer/>

            <h2>Comment</h2>
            <Comment>Короткий комментарий</Comment>
            <Gap size={16}/>
            <Comment>Длинный комментарий без ограничения по количеству строк</Comment>
            <Gap size={16}/>
            <Comment rowLimit={2}>Длинный комментарий с ограничением по количеству строк</Comment>
            <Spacer/>

            <h2>CustomButton</h2>
            <CustomButton
                leftAddons={<StarMIcon/>}
                rightAddons={<StarMIcon/>}
                hint='Hint'
                backgroundColor='#1c1c1e'
            >
                Label
            </CustomButton>
            <Spacer/>

            <h2>CustomPickerButton</h2>
            <div style={{display: 'flex'}}>
                <CustomPickerButtonDesktop
                    backgroundColor='linear-gradient(264.15deg, #FF42CA 0%, #FF8A00 100%)'
                    options={[
                        {key: 'Car', icon: CarMIcon},
                        {key: 'Star', icon: StarMIcon},
                        {key: 'Flower', icon: FlowerMMIcon},
                        {key: 'Banknote', icon: BanknoteMIcon},
                    ]}
                    label='Picker button'
                />
                <CustomPickerButtonDesktop
                    backgroundColor='linear-gradient(264.15deg, #FF42CA 0%, #FF8A00 100%)'
                    options={[
                        {key: 'Car', icon: CarMIcon},
                        {key: 'Star', icon: StarMIcon},
                        {key: 'Flower', icon: FlowerMMIcon},
                        {key: 'Banknote', icon: BanknoteMIcon},
                    ]}
                    variant='compact'
                />
            </div>
            <Spacer/>

            <h2>DateInput (Deprecated)</h2>
            <DateInput label='Дата зимнего солнцестояния' size='m'/>
            <Spacer/>

            <h2>DateRangeInput (Deprecated)</h2>
            <DateRangeInput
                label='Период действия патента'
                placeholder='ДД.ММ.ГГГГ - ДД.ММ.ГГГГ'
                size='m'
            />
            <Spacer/>

            <h2>DateTimeInput (Deprecated)</h2>
            <DateTimeInput label='Дата и время' placeholder='ДД.ММ.ГГГГ, ЧЧ:ММ' block size='m'/>
            <Spacer/>

            <h2>Drawer</h2>
            <Button type='button' size={48} onClick={() => setDrawerOpen(true)}>
                Показать анатомию
            </Button>
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            </Drawer>
            <Spacer/>

            <h2>Dropzone</h2>
            <Dropzone>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 724,
                    height: 200,
                }}>
                    <ContainerMIcon/>
                    <span style={{
                        lineHeight: '24px',
                        marginTop: 8,
                    }}>Перетащите файлы</span>
                </div>
            </Dropzone>
            <Spacer/>

            <h2>FileUploadItem</h2>
            <FileUploadItem
                title={'Title'}
                subtitle='Нет файла'
                uploadStatus={'INITIAL'}
                size={2097152}
                uploadDate={new Date().toLocaleDateString()}
                showDelete={true}
            >
                <FileUploadItem.StatusControl/>
                <FileUploadItem.Content/>
                <FileUploadItem.Actions/>
            </FileUploadItem>
            <Spacer/>

            <h2>FileUploadItemV1 (Deprecated)</h2>
            <FileUploadItemV1
                name='Довольно длинное название файла.pdf'
                uploadDate='22.01.2018'
                size={500000000}
                showDelete={false}
                showRestore={true}
            />
            <FileUploadItemV1
                name='Название файла.pdf'
                uploadDate='22.01.2018'
                size={45000}
                showDelete={true}
            />
            <FileUploadItemV1
                name='С кастомной иконкой.pdf'
                uploadDate='22.01.2018'
                size={50000}
                showDelete={true}
                icon={DiamondsMIcon}
            />
            <FileUploadItemV1
                name='Название файла.pdf'
                uploadDate='22.01.2018'
                uploadPercent={23.5678}
                uploadStatus='UPLOADING'
                showDelete={true}
            />
            <FileUploadItemV1
                name='Название файла.txt'
                uploadDate='22.01.2018'
                size={157290000}
                downloadLink='/link'
                uploadStatus='SUCCESS'
                showDelete={true}
            />
            <FileUploadItemV1
                name='Название файла.jpg'
                uploadDate='22.01.2018'
                size={45000}
                uploadStatus='ERROR'
                showDelete={true}
            />
            <FileUploadItemV1
                name='Название файла.png'
                uploadDate='22.01.2018'
                size={450000000}
                uploadStatus='ERROR'
                error={
                    <>
                        <p style={{margin: 0, marginBottom: '8px'}}>Размер больше 500 Кб</p>
                        <p style={{margin: 0}}>
                            Недопустимый формат файла. Загрузите файл в одном из этих форматов: .txt, .xml,
                            .csv
                        </p>
                    </>
                }
                showDelete={true}
            />
            <Spacer/>

            <h2>FilterTag + Select</h2>
            <SelectDesktop
                popoverPosition='bottom-start'
                options={[
                    {key: '1', content: 'По возрастанию'},
                    {key: '2', content: 'По убыванию'},
                ]}
                Field={({
                            selected,
                            innerProps: {ref, ...restInnerProps},
                            ...restProps
                        }) => (
                    <div ref={ref}>
                        <FilterTag checked={Boolean(selected)} showClear={false} {...restInnerProps} {...restProps}>
                            <b>{selected?.content}</b>
                        </FilterTag>
                    </div>
                )}
                selected={{key: '1', content: 'По возрастанию'}}
                fieldProps={{size: 32}}
                Option={BaseOption}
            />
            <Spacer/>

            <h2>FormControl</h2>
            <div style={{width: 320}}>
                <FormControl
                    block={true}
                    label='Label'
                    labelView={'inner'}
                    size={72}
                />
                <Gap size={16}/>
                <FormControl
                    block={true}
                    label='Label'
                    labelView={'inner'}
                    size={64}
                />
                <Gap size={16}/>
                <FormControl
                    block={true}
                    label='Label'
                    labelView={'inner'}
                    size={56}
                />
                <Gap size={16}/>
                <FormControl
                    block={true}
                    label='Label'
                    labelView={'inner'}
                    size={48}
                />
                <Gap size={16}/>
                <FormControl
                    block={true}
                    label='Label'
                    labelView={'inner'}
                    size={40}
                />
            </div>
            <Spacer/>

            <h2>Gallery</h2>
            <Gallery
                open={openGallery}
                onClose={() => {
                    setOpenGallery(false);
                }}
                images={[
                    {
                        name: 'Вертикальное изображение',
                        src: './images/gallery_1.jpg',
                    },
                    {
                        name: 'Горизонтальное  изображение',
                        src: './images/gallery_2.jpg',
                    },
                    {
                        name: 'Квадратное изображение',
                        src: './images/gallery_3.jpg',
                    },
                    {
                        name: 'Маленькое изображение',
                        src: './images/gallery_4.jpg',
                    },
                    {
                        name: 'Alfa promo.m3u8',
                        src: 'https://alfavideo.servicecdn.ru/videos/101064_31s0hnwZaamhbwE/master.m3u8',
                    },
                    {
                        name: 'Битое изображение.jpg',
                        src: 'https://picsum.photos',
                    },
                ]}
            />
            <Button view='secondary' onClick={() => setOpenGallery(true)}>
                Открыть галерею
            </Button>
            <Spacer/>

            <h2>GenericWrapper</h2>
            <div style={{backgroundColor: 'rgba(55, 120, 251, 0.1)'}}>
                <GenericWrapper padding={{top: 16, right: 16, bottom: 16, left: 16}} gap={20}>
                    <GenericWrapper>
                        <div
                            style={{
                                background: 'rgba(55, 120, 251, 0.1)',
                                border: '1px dashed #3778FB',
                                borderRadius: '8px',
                                height: '64px',
                                width: '64px',
                                boxSizing: 'border-box',
                            }}
                        />
                    </GenericWrapper>
                    <GenericWrapper>
                        <div
                            style={{
                                background: 'rgba(55, 120, 251, 0.1)',
                                border: '1px dashed #3778FB',
                                borderRadius: '8px',
                                height: '64px',
                                width: '64px',
                                boxSizing: 'border-box',
                            }}
                        />
                    </GenericWrapper>
                    <GenericWrapper>
                        <div
                            style={{
                                background: 'rgba(55, 120, 251, 0.1)',
                                border: '1px dashed #3778FB',
                                borderRadius: '8px',
                                height: '64px',
                                width: '64px',
                                boxSizing: 'border-box',
                            }}
                        />
                    </GenericWrapper>
                </GenericWrapper>
            </div>
            <Spacer/>

            <h2>Grid</h2>
            <div style={{
                background: 'var(--color-light-base-bg-primary)',
                padding: '8px 20px',
                marginTop: '1px',
            }}>
                <Grid.Row gutter={{mobile: 8, desktop: 16}}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(key => (
                        <Grid.Col width='1' key={key}>
                            <div style={{
                                lineHeight: '24px',
                                color: 'var(--color-light-text-secondary)',
                                background: 'var(--color-light-neutral-translucent-200)',
                                borderRadius: '8px',
                                textAlign: 'center',
                            }}>1
                            </div>
                        </Grid.Col>
                    ))}
                </Grid.Row>
            </div>
            <Spacer/>

            <h2>HatchingProgressBar</h2>
            <HatchingProgressBar value={40} hatchValue={60}/>
            <Spacer/>

            <h2>IconButton</h2>
            <div style={{display: 'flex'}}>
                <IconButton view={'secondary'} size={32} icon={DiamondsMIcon}/>
                <IconButton view={'secondary'} size={32} icon={DiamondsMIcon}/>
                <IconButton view={'tertiary'} size={32} icon={DiamondsMIcon}/>
                <IconButton view={'negative'} size={32} icon={DiamondsMIcon}/>
            </div>
            <Spacer/>

            <h2>IconView</h2>
            <Circle size={128} mainSize={80} border={true}>
                <DiamondsXxlIcon/>
            </Circle>
            <Spacer/>

            <h2>Indicator</h2>
            <div style={{display: 'flex'}}>
                <Indicator height={48} value={1} view='red'/>
                <Indicator height={40} value={1} view='red'/>
                <Indicator height={32} value={1} view='red'/>
                <Indicator height={24} value={1} view='red'/>
                <Indicator height={20} value={1} view='red'/>
                <Indicator height={16} value={1} view='red'/>
                <Indicator view='red'/>
            </div>
            <Spacer/>

            <h2>Input</h2>
            <Input
                placeholder='Введите текст'
                label='Текст'
                labelView={'inner'}
                size={56}
            />
            <Spacer/>

            <h2>InputAutocomplete</h2>
            <InputAutocomplete
                size={48}
                options={[
                    {key: 'Neptunium'},
                    {key: 'Plutonium'},
                    {key: 'Americium'},
                    {key: 'Curium'},
                    {key: 'Berkelium'},
                    {key: 'Californium'},
                    {key: 'Einsteinium'},
                    {key: 'Fermium'},
                    {key: 'Mendelevium'},
                    {key: 'Nobelium'},
                    {key: 'Lawrencium'},
                    {key: 'Rutherfordium'},
                    {key: 'Dubnium'},
                    {key: 'Seaborgium'},
                    {key: 'Bohrium'},
                ]}
                label='Инпут с автокомплитом'
                placeholder='Начните вводить название'
                allowUnselect={true}
                Option={BaseOption}
                showEmptyOptionsList={true}
            />
            <Spacer/>

            <h2>InternationalPhoneInput</h2>
            <InternationalPhoneInput
                label='Номер телефона'
                placeholder='Введите номер телефона'
                options={[
                    {key: '+7 921 681 53 98'},
                    {key: '+7 921 681 52 97'},
                    {key: '+7 921 681 52 96'},
                    {key: '+7 921 681 52 95'},
                    {key: '8 921 681 52 94'},
                ]}
            />
            <Spacer/>

            <h2>IntlPhoneInput (Deprecated)</h2>
            <IntlPhoneInput
                value={''}
                onChange={() => {
                }}
                options={[
                    {key: '+7 921 681 53 98'},
                    {key: '+7 921 681 52 97'},
                    {key: '+7 921 681 52 96'},
                    {key: '+7 921 681 52 95'},
                    {key: '+7 921 681 52 94'},
                ]}
                label='Номер телефона'
                defaultCountryIso2='RU'
                readOnly={false}
            />
            <Spacer/>

            <h2>KeyboardFocusable</h2>
            <KeyboardFocusable>
                {(ref, focused) => {
                    const focusOutlineStyles = {
                        outline: '2px solid var(--focus-color)',
                        outlineOffset: '2px',
                    };

                    return (
                        <>
                            <Button size={56}>
                                Кликни мышкой
                            </Button>
                            <Button size={56} ref={ref} style={focused ? focusOutlineStyles : {}}>
                                Выбери табом
                            </Button>
                        </>
                    );
                }}
            </KeyboardFocusable>
            <Spacer/>

            <h2>Link</h2>
            <>
                <Typography.Text view='primary-medium'>
                    <Link
                        view='default'
                        rel='noopener'
                        target='_blank'
                        href='https://alfabank.ru/get-money/credit-cards/100-days/'
                    >
                        Default
                    </Link>
                </Typography.Text>
                <Typography.Text view='primary-medium'>
                    <Link
                        view='primary'
                        rel='noopener'
                        target='_blank'
                        href='https://alfabank.ru/get-money/credit-cards/100-days/'
                    >
                        Primary
                    </Link>
                </Typography.Text>
                <Typography.Text view='primary-medium'>
                    <Link
                        view='secondary'
                        rel='noopener'
                        target='_blank'
                        href='https://alfabank.ru/get-money/credit-cards/100-days/'
                    >
                        Secondary
                    </Link>
                </Typography.Text>
            </>
            <Spacer/>

            <h2>List</h2>
            <Typography.Text view='primary-medium'>Пример маркированного списка:</Typography.Text>
            <List tag='ul' marker='–'>
                <List.Item>Пример элемента списка</List.Item>
                <List.Item>Пример элемента списка</List.Item>
                <List.Item>Пример элемента списка</List.Item>
                <List.Item>Пример элемента списка</List.Item>
                <List.Item>Пример элемента списка</List.Item>
            </List>
            <Spacer/>

            <h2>ListHeader</h2>
            <ListHeader title='Сегодня'/>
            <div>
                В Санкт-Петербурге ожидаются дожди, ливни с грозой, градом и шквалистым ветром до 20 м/с.
            </div>
            <ListHeader title='23 мая' description='среда'/>
            <div>Ясно, без осадков.</div>
            <Spacer/>

            <h2>Loader (Deprecated)</h2>
            <Loader/>
            <Spacer/>

            <h2>Markdown</h2>
            <Markdown>
                {`
# Герой нашего времени

«Герой нашего времени» — первый в русской прозе социально-психологический роман,
написанный Михаилом Юрьевичем Лермонтовым в 1837—1839 годах. Классика русской литературы.

## Структура романа

#### Начало

Роман состоит из нескольких частей, хронологический порядок которых нарушен.
Такое расположение служит особым художественным задачам: в частности, сначала Печорин показывается глазами Максима Максимыча,
а только затем мы видим его изнутри, по записям из дневника.

*  Предисловие

*  Часть первая

*  Журнал Печорина

*  Часть вторая

    > Окончание журнала Печорина

## Хронологический порядок глав

1. «Тамань»

2. «Княжна Мери»

3. «Бэла»

    > Начало рассказа Максима Максимыча

4. «Фаталист»

5. «Бэла»

    > Окончание рассказа Максима Максимыча; повествовательное обрамление

6. «Максим Максимыч»

7. Предисловие к «Журналу Печорина»

## Сюжет

### «Княжна Мери»

Повесть написана в форме дневника. П
о жизненному материалу «Княжна Мери» ближе всего к так называемой «светской повести» 1830-х годов,
но Лермонтов наполнил её иным смыслом.

Повесть начинается с прибытия Печорина в Пятигорск на лечебные воды, где он знакомится с княгиней Лиговской и её дочерью,
называемой на английский манер Мери. Кроме того, здесь он встречает свою бывшую любовь Веру и приятеля-юнкера Грушницкого.
Грушницкий выступает контрастным персонажем к Печорину.

За время своего пребывания в Пятигорске Печорин ухаживает за княжной Мери и ссорится с Грушницким;
он убивает его на дуэли, разрушает жизнь Веры и отказывает княжне Мери, равнодушной к нему, но желавшей,
чтобы окружающие её мужчины выполняли её капризы.
По подозрению в дуэли его вновь ссылают – на этот раз в крепость, где он знакомится с Максимом Максимычем.

![alt text](https://image.mel.fm/i/w/wvoRCaNADu/2420.jpg)
`}
            </Markdown>
            <Spacer/>

            <h2>MaskedInput</h2>
            <MaskedInput
                mask={[
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                ]}
                label='Номер карты'
                placeholder='0000 0000 0000 0000'
                labelView={'inner'}
                size={56}
            />
            <Spacer/>

            <h2>Modal</h2>
            <Button type='button' size={48} onClick={() => setOpenModal(true)}>
                Показать анатомию
            </Button>
            <ModalDesktop open={openModal} onClose={() => setOpenModal(false)} size={600}>
                <ModalDesktop.Content>
                    <div style={{
                        width: '100%',
                        height: '600px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(55, 120, 251, 0.1)',
                        border: '1px dashed rgb(55, 120, 251)',
                        boxSizing: 'border-box',
                    }}></div>
                </ModalDesktop.Content>
                <ModalDesktop.Footer>
                    <div style={{
                        width: '100%',
                        height: '48px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(55, 120, 251, 0.1)',
                        border: '1px dashed rgb(55, 120, 251)',
                        boxSizing: 'border-box',
                    }}></div>
                </ModalDesktop.Footer>
            </ModalDesktop>
            <Spacer/>

            <h2>Mq</h2>
            <Mq query='--mobile'>
                <Button>Мобильная кнопка</Button>
            </Mq>
            <Mq query='--tablet-s'>
                <Button>Десктопная кнопка</Button>
            </Mq>
            <Spacer/>

            <h2>NavigationBar</h2>
            <NavigationBar
                leftAddons={<CarMIcon/>}
                rightAddons={<CarMIcon/>}
                bottomAddons={<CarMIcon/>}
                backgroundColor='#f2f3f5'
                align='center'
            >
                Content
            </NavigationBar>
            <Spacer/>

            <h2>NavigationBarPrivate</h2>
            <NavigationBarPrivate
                view={'desktop'}
                leftAddons={<CarMIcon/>}
                rightAddons={<CarMIcon/>}
                bottomAddons={<CarMIcon/>}
                align='center'
            >
                Content
            </NavigationBarPrivate>
            <Spacer/>

            <h2>Notification</h2>
            <Notification
                badge='positive-checkmark'
                title='Пример уведомления'
                visible={notificationVisible}
                offset={180}
                onClose={() => setNotificationVisible(false)}
                onCloseTimeout={() => setNotificationVisible(false)}
            >
                Описание уведомления
            </Notification>
            <Button onClick={() => setNotificationVisible((prev) => !prev)}>Показать уведомление</Button>
            <Spacer/>

            <h2>NotificationManager</h2>
            <Button onClick={addNotification}>Показать уведомление</Button>
            <NotificationManager
                notifications={notifications}
                onRemoveNotification={removeNotification}
            />
            <Spacer/>

            <h2>NumberInput</h2>
            <NumberInput
                placeholder='Введите число'
                label='Число'
                labelView={'inner'}
                separator={','}
                fractionLength={2}
                size={56}
                clear={true}
            />
            <Spacer/>

            <h2>PageIndicator</h2>
            <PageIndicatorDynamic
                size={8}
                elements={7}
                active={true}
                cycle={true}
                duration={(index) => (index % 2 === 0 ? 2000 : 4000)}
            />
            <Spacer/>

            <h2>Pagination</h2>
            <Pagination
                currentPageIndex={0}
                pagesCount={10}
            />
            <Spacer/>

            <h2>PassCode</h2>
            <PassCode
                value={''}
                onChange={() => {
                }}
                codeLength={10}
                leftAddons={
                    <KeyPadButton view='text' key='left-addon'>
                        Забыли код?
                    </KeyPadButton>
                }
                rightAddons={
                    <KeyPadButton view='text' key='right-addon'>
                        <SfFaceIdXxlIcon/>
                    </KeyPadButton>}
                rightAddonsTitle='Вход по лицу'
            />
            <Spacer/>

            <h2>PassCodeV1 (Deprecated)</h2>
            <PassCodeV1
                value={''}
                onChange={() => {
                }}
                codeLength={10}
                message='Введите код из четырёх цифр'/>
            <Spacer/>

            <h2>PasswordInput</h2>
            <PasswordInput
                passwordVisible={false}
                onPasswordVisibleChange={() => {
                }}
                label='Пароль'
                labelView={'inner'}
                size={56}
            />
            <Spacer/>

            <h2>PatternLock</h2>
            <PatternLock
                onComplete={() => {
                }}
                themeState={'initial'}
                onDragStart={() => {
                }}
                observeTokens={true}
                showForgotCodeBtn={true}
                onForgotBtnClick={() => {
                }}
            />
            <Spacer/>

            <h2>PatternLockV1 (Deprecated)</h2>
            <PatternLockV1
                onComplete={() => {
                }}
                themeState={'initial'}
                onDragStart={() => {
                }}
                observeTokens={true}
                showForgotCodeBtn={true}
                onForgotBtnClick={() => {
                }}
            />
            <Spacer/>

            <h2>PhoneInput</h2>
            <PhoneInput
                placeholder='+7 000 000 00 00'
                label='Телефонный номер'
                labelView={'inner'}
                size={56}
            />
            <Spacer/>

            <h2>PickerButton</h2>
            <div style={{display: 'flex'}}>
                <PickerButtonDesktop options={[
                    {key: 'Car', icon: CarMIcon},
                    {key: 'Star', icon: StarMIcon},
                    {key: 'Flower', icon: FlowerMMIcon},
                    {key: 'Banknote', icon: BanknoteMIcon},
                ]} view='primary' label='Picker button'/>
                <PickerButtonDesktop options={[{key: 'Car'}, {key: 'Star'}, {key: 'Flower'}, {key: 'Banknote'}]}
                                     view='primary' variant='compact'/>
            </div>
            <Spacer/>

            <h2>Plate</h2>
            <Plate
                view='positive'
                title='Пример уведомления'
                border={true}
                rounded={true}
                subAddons={[<Button>Подробнее</Button>]}
                leftAddons={
                    <StatusBadge view='positive-checkmark'/>
                }
            />
            <Spacer/>

            <h2>Popover</h2>
            <Popover
                anchorElement={handleButtonRef.current}
                useAnchorWidth={true}
                position={'right'}
                open={popoverOpen}
                offset={[0, 4]}
            >
                Popover
            </Popover>
            <Button size={48} ref={handleButtonRef} onClick={() => setPopoverOpen(!popoverOpen)}>
                Показать поповер
            </Button>
            <Spacer/>

            <h2>PopupSheet</h2>
            <PopupSheet
                hasCloser={true}
                swipeable={true}
                open={popupSheetOpen}
                onClose={() => setPopupSheetOpen(false)}
                padding={0}
            >
                <div style={{height: 400}}></div>
            </PopupSheet>
            <Button type='button' size={48} onClick={() => setPopupSheetOpen(true)}>
                Показать шторку
            </Button>
            <Spacer/>

            <h2>Portal</h2>
            <Button
                onClick={() => setPortalShow(!portalShow)}>{portalShow ? 'Unmount children' : 'Mount children'}</Button>
            <div>
                {portalShow && (
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    <Portal getPortalContainer={() => portalContainerRef.current}>
                        <StarMIcon/>
                    </Portal>
                )}
            </div>
            <div ref={portalContainerRef} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 240,
                height: 95,
                border: '1px solid var(--color-light-neutral-300)',
                borderRadius: 8,
                marginTop: 6,
            }}/>
            <Spacer/>

            <h2>ProductCover</h2>
            <div style={{display: 'flex'}}>
                <ProductCover.Single
                    size={164}
                    cardholderName='Cardholder Name'
                    cardNumber={1234000000001234}
                    baseUrl='https://online.alfabank.ru/cards-images/cards/'
                    layers='BACKGROUND,LOGO,PAYMENT_SYSTEM'
                    cardId='RM'
                    eyeButton={true}
                />
                <ProductCover.Single
                    size={128}
                    cardholderName='Cardholder Name'
                    cardNumber={1234000000001234}
                    baseUrl='https://online.alfabank.ru/cards-images/cards/'
                    layers='BACKGROUND,LOGO,PAYMENT_SYSTEM'
                    cardId='RM'
                    eyeButton={true}
                />
            </div>
            <Spacer/>

            <h2>ProgressBar</h2>
            <ProgressBar value={40}/>
            <Gap size={16}/>
            <ProgressBar view='link' size={4} value={20}/>
            <Spacer/>

            <h2>PureCell</h2>
            <div
                style={{
                    width: '340px',
                    backgroundColor: 'rgba(55, 120, 251, 0.1)',
                    padding: '12px 16px',
                }}
            >
                <PureCell direction={'horizontal'}>
                    <PureCell.Content>
                        <PureCell.Main>
                            <div style={{
                                width: '207px',
                                height: '20px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(55, 120, 251, 0.1)',
                                border: '1px dashed rgb(55, 120, 251)',
                                boxSizing: 'border-box',
                            }}/>
                            <div style={{
                                width: '207px',
                                height: '20px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(55, 120, 251, 0.1)',
                                border: '1px dashed rgb(55, 120, 251)',
                                boxSizing: 'border-box',
                            }}/>
                        </PureCell.Main>
                        <PureCell.Addon verticalAlign='center'>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(55, 120, 251, 0.1)',
                                border: '1px dashed rgb(55, 120, 251)',
                                boxSizing: 'border-box',
                            }}/>
                        </PureCell.Addon>
                        <PureCell.Footer footerPadding='default'>
                            <div style={{
                                width: '263px',
                                height: '16px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(55, 120, 251, 0.1)',
                                border: '1px dashed rgb(55, 120, 251)',
                                boxSizing: 'border-box',
                            }}/>
                        </PureCell.Footer>
                    </PureCell.Content>
                    <PureCell.Graphics>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(55, 120, 251, 0.1)',
                            border: '1px dashed rgb(55, 120, 251)',
                            boxSizing: 'border-box',
                        }}/>
                    </PureCell.Graphics>
                </PureCell>
            </div>
            <Spacer/>

            <h2>Radio</h2>
            <Radio size={24} label='Выбрана' checked={true}/>
            <Gap size={20}/>
            <Radio
                size={24}
                label='Выбрана и недоступна'
                disabled={true}
                checked={true}
            />
            <Gap size={20}/>
            <Radio size={24} label='По умолчанию'/>
            <Gap size={20}/>
            <Radio size={24} label='По умолчанию и недоступна' disabled={true}/>
            <Spacer/>

            <h2>RadioGroup</h2>
            <RadioGroupDesktop
                label='Ближайшая планета к Солнцу'
                direction='horizontal'
                name='radioGroup'
                onChange={() => {
                }}
                hint='Выберите один из вариантов'
            >
                <Radio label='Меркурий' value='one' size={24}/>
                <Radio label='Венера' value='two' size={24}/>
                <Radio label='Нептун' value='three' size={24}/>
            </RadioGroupDesktop>
            <Spacer/>


            <h2>Scrollbar</h2>
            <div style={{height: 240, width: 600, margin: 'var(--gap-20-neg)'}}>
                <Scrollbar style={{height: '100%'}} autoHide={false}>
                    {new Array(51).fill(null).map((_, idx) => {
                        const style = getChildStyle(
                            idx % 2 === 0 ? '--color-light-neutral-200' : '--color-light-base-bg-secondary',
                        );
                        return (
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            <div key={idx} style={style}>
                                {idx + 1}
                            </div>
                        );
                    })}
                </Scrollbar>
            </div>
            <Spacer/>

            <h2>SegmentedControl</h2>
            <SegmentedControl size={40} onChange={() => {
            }} selectedId={1}>
                <Segment id={1} title='Таб 1'/>
                <Segment id={2} title='Таб 2'/>
            </SegmentedControl>
            <Spacer/>

            <h2>SelectWithTags</h2>
            <SelectWithTags
                selected={[{key: '1', content: 'H', value: 'H'}]}
                onChange={() => {
                }}
                label='Элементы'
                labelView='outer'
                placeholder='Выберите элементы'
                size={56}
                value={''}
                options={[
                    {key: '1', content: 'H', value: 'H'},
                    {key: '2', content: 'Li', value: 'Li'},
                    {key: '3', content: 'Na', value: 'Na'},
                    {key: '4', content: 'Curium', value: 'Curium'},
                    {key: '5', content: 'Berkelium', value: 'Berkelium'},
                    {key: '6', content: 'Californium', value: 'Californium'},
                    {key: '7', content: 'Einsteinium', value: 'Einsteinium'},
                    {key: '8', content: 'Fermium', value: 'Fermium'},
                ]}
                onInput={() => {
                }}
                collapseTagList={false}
                Option={BaseOption}
                optionsListProps={{
                    emptyPlaceholder: (
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Typography.Text view='primary-small'>
                                Ничего не нашлось
                            </Typography.Text>
                        </div>
                    ),
                }}
            />
            <Spacer/>

            <h2>SidePanel</h2>
            <Button type='button' size={48} onClick={() => setOpenSidePanel(true)}>
                Показать анатомию
            </Button>
            <SidePanelDesktop open={openSidePanel} onClose={() => setOpenSidePanel(false)}>
                <SidePanelDesktop.Content>
                    <div style={{
                        borderRadius: '8px',
                        backgroundColor: 'rgba(55, 120, 251, 0.1)',
                        border: '1px dashed rgb(55, 120, 251)',
                        boxSizing: 'border-box',
                        width: '100%',
                        height: '100%',
                    }}></div>
                </SidePanelDesktop.Content>
                <SidePanelDesktop.Footer>
                    <div style={{
                        borderRadius: '8px',
                        backgroundColor: 'rgba(55, 120, 251, 0.1)',
                        border: '1px dashed rgb(55, 120, 251)',
                        boxSizing: 'border-box',
                        width: '100%',
                        height: '48px',
                    }}></div>
                </SidePanelDesktop.Footer>
            </SidePanelDesktop>
            <Spacer/>

            <h2>Skeleton</h2>
            <Skeleton visible={true} style={{borderRadius: 'var(--border-radius-4)'}}>
                <Status view='contrast'>This is fine</Status>
            </Skeleton>
            <Spacer/>

            <h2>Slider</h2>
            <Slider
                size={4}
                value={0}
                onChange={() => {
                }}
                pips={{
                    mode: 'values',
                    values: [0, 10, 100],
                }}
                range={{
                    min: [0],
                    '50%': [10, 10],
                    max: [100],
                }}
            />
            <Spacer/>

            <h2>SliderInput</h2>
            <SliderInput
                value={3}
                label='Label'
                labelView={'inner'}
                size={56}
                pips={{
                    mode: 'values',
                    values: [1, 10 / 2, 10],
                }}
                min={1}
                max={10}
                step={1}
                block={true}
                onChange={() => {
                }}
            />
            <Spacer/>

            <h2>SortableList</h2>
            <div style={{maxWidth: 350}}>
                <SortableList
                    items={[1, 2, 3, 4, 5, 6].map((item) => ({id: item}))}
                    onDragEnd={() => {
                    }}
                    padding='xs'
                    borderRadius='m'
                    controlPadding='s'
                    renderItem={() => <div>123</div>}
                />
            </div>
            <Spacer/>

            <h2>Space</h2>
            <Space useCssGaps={true} direction='horizontal' align={'start'}>
                {new Array(3).fill(null).map((_, idx) => (
                    <div key={idx} style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--color-light-neutral-translucent-200)',
                    }}/>
                ))}
            </Space>
            <Spacer/>

            <h2>Spinner</h2>
            <Spinner visible={true} preset={16}/>
            <Spinner visible={true} preset={24}/>
            <Spinner visible={true} preset={48}/>
            <Spacer/>

            <h2>Stack</h2>
            <Button onClick={() => setOpenStackModal(true)}>Показать модалку</Button>

            <Stack value={1000}>
                {(zIndex) => (
                    <ModalDesktop
                        zIndex={zIndex}
                        open={openStackModal}
                        onClose={() => setOpenStackModal(false)}
                    >
                        <ModalDesktop.Content>
                            <style>{`.target {width: 100%}`}</style>
                            <Stack>
                                {(nextZIndex) => (
                                    <Tooltip
                                        zIndex={nextZIndex}
                                        content={<div>Tooltip</div>}
                                        trigger='click'
                                        targetClassName='target'
                                    >
                                        <Button block={true}>Показать тултип</Button>
                                    </Tooltip>
                                )}
                            </Stack>
                        </ModalDesktop.Content>
                    </ModalDesktop>
                )}
            </Stack>
            <Spacer/>

            <h2>Status</h2>
            <div style={{display: 'flex'}}>
                <Status size={40} uppercase={false}>
                    Всё в порядке
                </Status>
                <Gap size={12} direction='horizontal'/>
                <Status size={32} uppercase={false}>
                    Всё в порядке
                </Status>
                <Gap size={12} direction='horizontal'/>
                <Status size={24} uppercase={false}>
                    Всё в порядке
                </Status>
                <Gap size={12} direction='horizontal'/>
                <Status size={20} uppercase={false}>
                    Всё в порядке
                </Status>
            </div>
            <Spacer/>

            <h2>SteppedProgressBar</h2>
            <SteppedProgressBar
                step={5}
                maxStep={10}
                description={"Название шага"}
            />
            <Spacer/>

            <h2>Steps</h2>
            <Steps
                activeStep={2}
                defaultActiveStep={2}
                ordered={true}
                onChange={() => {
                }}
            >
                {[1, 2, 3, 4, 5].map((item, key) => (
                    <div key={key}>Шаг {item}</div>
                ))}
            </Steps>
            <Spacer/>

            <h2>Switch</h2>
            <Switch
                checked={true}
                label='Сделать всё хорошо'
                hint='Бесплатно без СМС'
                onChange={() => {
                }}
            />
            <Spacer/>

            <h2>SystemMessage</h2>
            <div style={{width: 500}}>
                <SystemMessage
                    fullHeight={true}
                    padding={{right: 24, left: 24, bottom: 24}}
                >
                    <SystemMessage.Graphic>
                        <Circle size={80} backgroundColor='var(--color-light-neutral-translucent-100)'>
                            <MobilePhoneBubbleLineMIcon color='var(--color-light-neutral-translucent-1300)'/>
                        </Circle>
                    </SystemMessage.Graphic>

                    <SystemMessage.Title>
                        Подтвердите подключение кодом из смс
                    </SystemMessage.Title>

                    <SystemMessage.Subtitle>
                        Проверили вашу заявку — всё в порядке. Осталось подтвердить
                        подключение
                    </SystemMessage.Subtitle>

                    <SystemMessage.Caption>
                        Для этого нажмите на кнопочку ниже
                    </SystemMessage.Caption>

                    <SystemMessage.Controls
                        direction={'column'}
                    >
                        <Button size={48} view='primary'>
                            Получить код
                        </Button>

                        <Button size={48}>
                            Отмена
                        </Button>
                    </SystemMessage.Controls>
                </SystemMessage>
            </div>
            <Spacer/>

            <h2>TabBar</h2>
            <TabBar selectedId={'1'} onChange={() => {
            }} border={true}>
                <TabBar.Tab id='1' label='TabName1' icon={<DiamondsMIcon/>}/>
                <TabBar.Tab id='2' label='TabName2' icon={<DiamondsMIcon/>}/>
            </TabBar>
            <Spacer/>

            <h2>Table</h2>
            <Table>
                <Table.THead>
                    <Table.THeadCell title='Дата'>Дата</Table.THeadCell>

                    <Table.THeadCell title='Контрагент'>Контрагент</Table.THeadCell>

                    <Table.THeadCell title='Сумма' textAlign='right' width={268}>
                        Сумма
                    </Table.THeadCell>
                </Table.THead>
                <Table.TBody>
                    {[
                        {
                            id: 28,
                            date: '30.06.2022',
                            title: 'ООО "КОРПУС-ИТ"',
                            sum: 21000000,
                        },
                        {
                            id: 12,
                            date: '30.06.2022',
                            title: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОБИЛСТИЛ"',
                            subtitle:
                                'Оказание услуг по договору № 26/09 на основании акта № 1450 от 30 июня 2020 года, в т.ч. НДС 18%',
                            sum: 10002030,
                        },
                        {
                            id: 5,
                            date: '30.06.2022',
                            title: 'ИП Жуков Валерий Сергеевич',
                            subtitle: 'Услуги по ремонту за июнь, НДС не облагается',
                            sum: 3000069,
                        },
                    ].map((row) => (
                        <Table.TRow key={row.id}>
                            <Table.TCell>
                                <Typography.Text view='primary-small' tag='div'>
                                    {row.date}
                                </Typography.Text>
                            </Table.TCell>

                            <Table.TCell>
                                <Space size={2}>
                                    <Typography.Text view='primary-small' tag='div'>
                                        {row.title}
                                    </Typography.Text>
                                    <Typography.Text view='primary-small' color='secondary'>
                                        {row.subtitle}
                                    </Typography.Text>
                                </Space>
                            </Table.TCell>

                            <Table.TCell>
                                <Amount
                                    value={row.sum}
                                    currency='RUR'
                                    minority={100}
                                    view='withZeroMinorPart'
                                    bold='full'
                                    transparentMinor={true}
                                />
                            </Table.TCell>
                        </Table.TRow>
                    ))}
                </Table.TBody>
            </Table>
            <Spacer/>

            <h2>Tabs</h2>
            <TabsDesktop
                selectedId={'tab-2'}
                onChange={() => {
                }}
                textStyle={'paragraph-primary-large'}
            >
                {[
                    {title: 'Aurum', id: 'tab-1'},
                    {title: 'Bercelium', id: 'tab-2'},
                    {title: 'Curium', id: 'tab-3'},
                    {title: 'Neptunium', id: 'tab-4'},
                    {title: 'Plutonuim', id: 'tab-5'},
                    {title: 'Rubidium', id: 'tab-6'},
                    {title: 'Californium', id: 'tab-7'},
                    {title: 'Hydrogenium', id: 'tab-8'},
                    {title: 'Helium', id: 'tab-9'},
                    {title: 'Lithium', id: 'tab-10'},
                    {title: 'Beryllium', id: 'tab-11'},
                    {title: 'Borum', id: 'tab-12'},
                    {title: 'Carboneum', id: 'tab-13'},
                    {title: 'Nitrogenium', id: 'tab-14'},
                    {title: 'Oxygenium', id: 'tab-15'},
                ].slice(0, Number('3')).map((item) => (
                    <Tab title={item.title} id={item.id} key={item.id}/>
                ))}
            </TabsDesktop>
            <Spacer/>

            <h2>Tag</h2>
            <Tag
                size={48}
                checked={true}
                onClick={() => {
                }}
            >
                Label
            </Tag>
            <Spacer/>

            <h2>Text</h2>
            <Text view='headline-system-small'>Headline-system-small</Text>
            <Gap size={16}/>
            <Text view='paragraph-primary-medium'>Paragraph-primary-medium</Text>
            <Spacer/>

            <h2>Textarea</h2>
            <Textarea
                label={'Ручное управление высотой'}
                labelView={'outer'}
                autosize={false}
                resize='vertical'
                minRows={3}
            />
            <Spacer/>

            <h2>TimeInput (Deprecated)</h2>
            <TimeInput label='Время визита' placeholder='ЧЧ:ММ' size={48}/>
            <Spacer/>

            <h2>Toast</h2>
            <Toast
                open={toastOpen}
                badge='positive-checkmark'
                title='Пример уведомления с кнопкой и крестиком'
                hasCloser={true}
                onClose={() => {
                    setToastOpen(false);
                }}
                autoCloseDelay={3000}
                actionButton={
                    <Button
                        size={48}
                        view='ghost'
                        colors='inverted'
                        onClick={() => {
                            setToastOpen(false);
                        }}
                    >
                        Отменить
                    </Button>
                }
                style={{left: '20%'}}
            />
            <Button
                onClick={() => {
                    setToastOpen(true);
                }}
            >
                Показать снизу
            </Button>
            <Spacer/>

            <h2>ToastPlate</h2>
            <ToastPlate
                badge='positive-checkmark'
                title='Поздравляем, полный успех'
                hasCloser={true}
                onClose={() => {
                }}
                actionButton={
                    <Button colors='inverted' view='ghost' size={48}>
                        Восстановить
                    </Button>
                }
            />
            <Spacer/>

            <h2>Underlay</h2>
            <Underlay
                onClick={() => {
                }}
                borderRadius='m'
                borderSize={1}
                shadow='shadow-s'
                backgroundColor='secondary'
                borderColor='primary'
                overflow={false}
                dimensions={{height: 'auto', width: 320}}
                padding={{
                    top: 'm',
                    right: 'm',
                    bottom: 'm',
                    left: 'm',
                }}
                contentProps={{
                    backgroundColor: 'secondary',
                    axis: 'horizontal',
                    alignment: 'center',
                    justifyContent: 'center',
                }}
            >
                <Circle size={80} backgroundColor='#2FC26E' border={true}>
                    <DiamondsMIcon color='#fff'/>
                </Circle>
                <Circle size={80} backgroundColor='#F15045' border={true}>
                    <DiamondsMIcon color='#fff'/>
                </Circle>
                <Circle size={80} backgroundColor='#F6BF65' border={true}>
                    <DiamondsMIcon color='#fff'/>
                </Circle>
            </Underlay>
            <Spacer/>

            <h2>UniversalDateInput</h2>
            <UniversalDateInput
                view='date'
                label='Дата'
                labelView={'inner'}
                size={56}
                value={null}
                picker={false}
                clear={true}
            />
            <Spacer/>

            <h2>UniversalModal</h2>
            <Button onClick={() => setOpenUniversalModal((prev) => !prev)}>Показать анатомию</Button>
            <UniversalModalDesktop
                open={openUniversalModal}
                width={500}
                height={500}
                onClose={() => setOpenUniversalModal(false)}
            />
            <Spacer/>

            <h2>withSuffix</h2>
            <SuffixInput
                placeholder='Введите число'
                label='Количество месяцев'
                labelView={'inner'}
                suffix={<Typography.Text view='component-primary' color='secondary'> мес</Typography.Text>}
                size={48}
            />
            <Spacer/>

            <h2>Confirmation</h2>
            <Confirmation
                screen={confirmationScreen}
                state={confirmationState}
                alignContent='center'
                blockSmsRetry={confirmationBlockSmsRetry}
                countdownDuration={10000}
                tempBlockDuration={10000}
                onChangeState={setConfirmationState}
                onChangeScreen={setConfirmationScreen}
                onInputFinished={() => {
                }}
                onSmsRetryClick={() => {
                }}
                onTempBlockFinished={() => {
                }}
                phone='+7 ··· ··· 07 24'
            />
            <Spacer/>

            <h2>ConfirmationV1 (Deprecated)</h2>
            <ConfirmationV1
                phone='+7 000 000 00 42'
                onInputFinished={() => {
                }}
                onSmsRetryClick={() => {
                }}
                countdownDuration={10000}
                code={valueConfirmationV1}
                onInputChange={({code}) => setValueConfirmationV1(code)}
                alignContent='center'
                requiredCharAmount={5}
            />
            <Spacer/>
        </>
    )
}

export default App
