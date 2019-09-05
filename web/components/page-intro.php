<div class="section py-0 overflow-hidden" style="padding: 0;">
    <div class="flex flex-wrap">      
      <div class="w-full lg:flex-1 relative mob-order-2">
        <!-- Velg mellom lg:center-y og lg:intro-space (Valg for lg:intro-space kan hete noe sånt som "Skru på ved lang tekst i intro") -->
        <div class="py-8 p-2 lg:px-24 text-center mx-auto relative page-intro lg:center-y">
        <div class="heading-sm text-eple js-load-stagger"><?php echo $subtitle ?></div>
        <hr class="hr-small mt-3 js-load-stagger">
        <h1 class="heading-xl mb-8 js-load-stagger">
          <?php echo $title ?>
        </h1>
        <div class="js-load-stagger">
          <p style="max-width: 42ch; margin: 0 auto;">Salongen er et personlig og inspirerende konferansehus med et stort hjerte for å skreddersy arrangementer av høy kvalitet. Salongen har møterom og fasiliteter som passer fint for både små møter og større arrangementer. </p>
        </div>
          <?php if ($includeButtons) { ?>
            <div class="js-load-stagger mt-8">
              <a href="#" class="button">Book møterom</a>
              <a href="#" class="button">Book konferanse</a>
            </div>
          <?php } ?>

          <?php if(isset($subtitle) && $subtitle == 'Møterom'){ ?>

          <div class="mt-8 js-load-stagger">
            <div class="heading-sm text-center">Velg ønsket tidspunkt</div>

            <form class="form-meeting-rooms mt-4 mx-auto relative">
              <input id="date" class="w-full p-0 m-0 c-calendar button-normal js-meeting-rooms-check" type="text" placeholder="Velg en dato" readonly="readonly">
              <div class="flex">
                <div class="relative w-1/3">
                  <select id="time-from" class="w-full button-normal bg-white text-center border-t-0 border-r-0 js-meeting-rooms-check" type="text" placeholder="Fra"  readonly="readonly">
                    <option value selected disabled>Fra</option>
                    <option value="08">08.00</option>
                    <option value="09">09.00</option>
                    <option value="10">10.00</option>
                    <option value="11">11.00</option>
                    <option value="12">12.00</option>
                    <option value="13">13.00</option>
                    <option value="14">14.00</option>
                    <option value="15">15.00</option>
                    <option value="16">16.00</option>
                    <option value="17">17.00</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <div class="relative w-1/3">
                  <select  id="time-to" class="w-full button-normal bg-white text-center border-t-0 border-r-0 js-meeting-rooms-check" type="text" readonly="readonly">
                    <option value selected disabled>Til</option>
                    <option value="09">09.00</option>
                    <option value="10">10.00</option>
                    <option value="11">11.00</option>
                    <option value="12">12.00</option>
                    <option value="13">13.00</option>
                    <option value="14">14.00</option>
                    <option value="15">15.00</option>
                    <option value="16">16.00</option>
                    <option value="17">17.00</option>
                    <option value="18">18.00</option>

                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <button class="w-1/3 button-normal button-eple bg-white text-center js-meeting-rooms-button" id="button-meeting-rooms" disabled type="text">Sjekk</button>
              </div>
            </form>
          </div>
          <?php } ?>
          

        </div>
      </div>
      <div class="w-full lg:flex-1 mob-order-1 mob-max-h-50vh intro-img">
        <img data-src="/assets/img/tmp24.jpg" class="inview lazyload-img lazyload">
      </div>
    </div>
</div>