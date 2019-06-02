<div class="section bg-krem-light py-0" style="padding: 0;">
  <div class="h-full overflow-hidden absolute w-full">
    <div class="absolute container w-full pin-l u-flexgrid-g" style="min-height: 70vh">
      <div class="col-3">
        <div class="overflow-hidden relative" style="transform: scale(2); transform-origin: center right;">
          <div class="overflow-hidden">
            <div class="sticky-image">
              <img data-src="/assets/img/tmp4.jpg" class="inview lazyload-img lazyload">
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 col-off-4">
        <div class="-mt-12">
          <div class="overflow-hidden">
            <div class="sticky-image">
              <img src="/assets/img/tmp5.jpg" class="inview -mt-32 lazyload-img lazyload">
            </div>
          </div>
        </div>
      </div>
      <div class="col-12"></div>
      <div class="col-2 mt-64">
        <div class="overflow-hidden">
          <div class="sticky-image">
            <img src="/assets/img/tmp7.jpg" class="inview mt-8 lazyload-img lazyload">
          </div>
        </div>
      </div>
      <div class="col-2 col-off-8 mt-64">
        <div style="transform: scale(2); transform-origin: bottom left;">
          <div class="overflow-hidden">
            <div class="sticky-image">
              <img src="/assets/img/tmp1.jpg" class="inview lazyload-img lazyload">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container bg-segl relative">
    <div class="u-flexgrid-g justify-center items-center" style="min-height: 70vh">
      <div class="col-12 lg:col-8 xl:col-6 text-center pt-32">
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
              <input class="w-full p-0 m-0 c-calendar button-normal js-meeting-rooms-check" type="text" placeholder="Velg en dato" readonly="readonly">
              <div class="flex">
                <div class="relative w-1/3">
                  <select class="w-full button-normal bg-white text-center border-t-0 border-r-0 js-meeting-rooms-check" type="text" placeholder="Fra"  readonly="readonly">
                    <option value selected disabled>Fra</option>
                    <option>08.00</option>
                    <option>09.00</option>
                    <option>10.00</option>
                    <option>11.00</option>
                    <option>12.00</option>
                    <option>13.00</option>
                    <option>14.00</option>
                    <option>15.00</option>
                    <option>16.00</option>
                    <option>17.00</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <div class="relative w-1/3">
                  <select class="w-full button-normal bg-white text-center border-t-0 border-r-0 js-meeting-rooms-check" type="text" readonly="readonly">
                    <option value selected disabled>Til</option>
                    <option>09.00</option>
                    <option>10.00</option>
                    <option>11.00</option>
                    <option>12.00</option>
                    <option>13.00</option>
                    <option>14.00</option>
                    <option>15.00</option>
                    <option>16.00</option>
                    <option>17.00</option>
                    <option>18.00</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <button class="w-1/3 button-normal button-eple bg-white text-center js-meeting-rooms-button" disabled type="text">Sjekk</button>
              </div>
            </form>
          </div>
          <?php } ?>
      </div>
    </div>
  </div>
</div>
